import 'dotenv/config';
import getContentfulEntries from "simple-contentful-fetch/index.mjs";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import path from 'node:path';
import * as url from 'node:url';
import fs from 'fs-extra';
import fetch from 'node-fetch';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../');

const OUT_PATH = process.env.CONTENT_OUT_PATH ? path.resolve(ROOT_DIR, process.env.CONTENT_OUT_PATH) : path.resolve(ROOT_DIR, './src/assets/content/stories.json');
const REL_OUT_DIR = path.dirname(path.relative(ROOT_DIR, OUT_PATH));
const QR_DIR = path.resolve(OUT_PATH, './qr-codes');
const PUBLIC_PATH = path.resolve(ROOT_DIR, './public');
const IMAGES_PATH = path.resolve(PUBLIC_PATH, './content/images');

/**
 * Traverses bynder image fields to get the file url
 * @param {Object|null} image Image object from contentful
 * @returns {String}
 */
const parseImage = (image) => image && image.fields && image.fields.file ? image.fields.file.url : '';

/**
 * Fetches an image from the internet and saves it locally.
 * @param {String} url Url of image to download
 * @param {String} out Path to write image file to
 */
const fetchImage = async (url, out) => {
  if (!url) return;
  const response = await fetch(url)
    .catch(err => console.log('Image fetch error', url, err));

  if (!response.ok) { console.error(`Cannot download image from ${url}`, response.statusText); return; }

  fs.ensureDir(path.dirname(out));
  return response.body.pipe(fs.createWriteStream(out));
}

/**
 * Takes a serialized/safe Contentful API response and converts it to usable props for components
 * @param {Object} data Contentful data response
 * @returns {Object}
 */
const pruneContentfulResponse = (data) => {
  const updatedItems = data.items.map((entry, i) => {

    const { slug, pageTitle, patientName, bynderIntroMedia, introCopy, contentBody } = entry.fields;
    const url = 'https://www.uwhealth.org/patient-stories/' + slug;

    const story = introCopy ? documentToHtmlString(introCopy) + documentToHtmlString(contentBody) : documentToHtmlString(contentBody);
    const imageUrl = parseImage(bynderIntroMedia).replace('http://', 'https://');

    const imagePath = path.resolve(IMAGES_PATH, path.basename(imageUrl, '.jpg') + '.jpg');

    if (imageUrl) fetchImage(imageUrl, imagePath);

    return {
      title: pageTitle,
      name: patientName,
      position: i,
      id: slug || i,
      image: '/' + path.posix.relative(PUBLIC_PATH, imagePath),
      story,
      url,
    }
  });

  data.items = updatedItems;
  delete data.includes;

  return data;
}


getContentfulEntries(
  { content_type: process.env.CONTENTFUL_CONTENT_TYPE || "pagePatientStory", limit: 300 },
  OUT_PATH,
  pruneContentfulResponse
)
.then(() => {});
