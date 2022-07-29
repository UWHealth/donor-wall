import 'dotenv/config';
import getContentfulEntries from "simple-contentful-fetch/index.mjs";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import QRCode from 'qrcode';
import path from 'node:path';
import * as url from 'node:url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../');

const OUT_PATH = process.env.CONTENT_OUT_PATH ? path.resolve(ROOT_DIR, process.env.CONTENT_OUT_PATH) : path.resolve(ROOT_DIR, './src/assets/content/stories.json');
const QR_DIR = path.resolve(OUT_PATH, './qr-codes');

/**
 * Traverses bynder image fields to get the file url
 * @param {Object|null} image Image object from contentful
 * @returns {String}
 */
const parseImage = (image) => image && image.fields && image.fields.file ? image.fields.file.url : '';

/**
 * Takes a serialized/safe Contentful API response and converts it to usable props for components
 * @param {Object} data Contentful data response
 * @returns {Object}
 */
const pruneContentfulResponse = (data) => {
  const updatedItems = data.items.map((entry, i) => {

    const { slug, pageTitle, patientName, bynderIntroMedia, introCopy, contentBody } = entry.fields;
    const url = 'https://www.uwhealth.org/patient-stories/' + slug;
    // const qrcodePath = `${QR_DIR}/${slug}.svg`;

    // QRCode.toFile(qrcodePath, url, (err) => { if (err) console.error(err) })

    return {
      title: pageTitle,
      name: patientName,
      position: i,
      id: slug || i,
      image: parseImage(bynderIntroMedia),
      intro: documentToHtmlString(introCopy),
      body: documentToHtmlString(contentBody),
      url,
      // qrcodeUrl:path.relative('../public/', qrcodePath),
    }
  });

  data.items = updatedItems;

  return data;
}


getContentfulEntries(
  { content_type: process.env.CONTENTFUL_CONTENT_TYPE || "pagePatientStory", limit: 300 },
  OUT_PATH,
  pruneContentfulResponse
)
.then(() => {});
