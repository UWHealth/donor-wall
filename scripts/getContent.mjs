import 'dotenv/config';
import getContentfulEntries from "simple-contentful-fetch/index.mjs";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import QRCode from 'qrcode';

import path from 'node:path';
import * as url from 'node:url';
import fs from 'fs-extra';
import fetch from 'node-fetch';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../');

const OUT_PATH = process.env.CONTENT_OUT_PATH ? path.resolve(ROOT_DIR, process.env.CONTENT_OUT_PATH) : path.resolve(ROOT_DIR, './src/assets/content/stories.json');
const REL_OUT_DIR = path.dirname(path.relative(ROOT_DIR, OUT_PATH));
const QR_URL = process.env.SEARCH_APP_URL || 'https://donorwallsearchtest.uwhealth.wisc.edu/';
const PUBLIC_PATH = path.resolve(ROOT_DIR, './public');
const IMAGES_PATH = path.resolve(PUBLIC_PATH, './content/images');

/**
 * Traverses bynder image fields to get the file url
 * @param {Object|null} image Image object from contentful
 * @returns {String}
 */
const parseImage = (image) => image && image.fields && image.fields.file ? image.fields.file : '';

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

  fs.ensureDirSync(path.dirname(out));
  return response.body.pipe(fs.createWriteStream(out));
}

/**
 * Takes a serialized/safe Contentful API response and converts it to usable props for components
 * @param {Object} data Contentful data response
 * @returns {Object}
 */
const pruneContentfulResponse = (data) => {
  const updatedItems = data.items.map((entry, i) => {

    // pagePatientStory code
    // const { slug, pageTitle, patientName, bynderIntroMedia, introCopy, contentBody } = entry.fields;
    // const url = 'https://www.uwhealth.org/patient-stories/' + slug;
    // const story = introCopy ? documentToHtmlString(introCopy) + documentToHtmlString(contentBody) : documentToHtmlString(contentBody);
    // const imageUrl = parseImage(bynderIntroMedia).replace('http://', 'https://');
    // const imagePath = path.resolve(IMAGES_PATH, path.basename(imageUrl, '.jpg') + '.jpg');
    // const title = pageTitle;
    // const [firstName, lastName] = patientName[0] && patientName[0].split(' ');

    // summaryPatientStory
    const { firstName, lastName, body, image, slug, year, organ, title } = entry.fields;
    const story = documentToHtmlString(body);
    const url = 'https://www.uwhealth.org/patient-stories/' + slug;
    const file = parseImage(image);
    const imageIsTall = file?.width <= file?.height;
    const imageUrl = file?.url?.replace('http://', 'https://');
    const imagePath = path.resolve(IMAGES_PATH, path.basename(imageUrl, '.jpg') + '.jpg');


    if (imageUrl) fetchImage(imageUrl, imagePath);

    return {
      title,
      firstName,
      lastName,
      year,
      organ,
      imageIsTall,
      story,
      image: '/' + path.posix.relative(PUBLIC_PATH, imagePath),
      url,
      name: firstName + ' ' + lastName,
      position: i,
      id: slug || i,
    }
  });

  data.items = updatedItems;
  delete data.includes;

  return data;
}


(async () => {
  console.log('Fetching stories and images from Contentful.');
  await getContentfulEntries(
    { content_type: process.env.CONTENTFUL_CONTENT_TYPE || "summaryPatientStory", limit: 300 },
    OUT_PATH,
    pruneContentfulResponse
  )
  .then(async () => {
    const qrOut = path.resolve(PUBLIC_PATH, 'qr-code.png');

    if (!process.env.SEARCH_APP_URL) console.log(`Missing SEARCH_APP_URL environment variable. Defaulting to "${QR_URL}".`);
    console.log('Writing QR Code, using "', QR_URL, '"');

    await QRCode.toFile(qrOut, QR_URL, {type: 'png', width: 800, margin: 1})
      .catch(e => {
        console.log('Error writing QR code to '+ qrOut);
        console.log(e);
      });
  });
})();
