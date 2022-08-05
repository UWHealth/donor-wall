import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import 'dotenv/config';

// Set by github
const IS_CI = process.env.CI;
const IS_PRD = IS_CI || process.env.NODE_ENV === "production" ? true : false;

// https://astro.build/config
export default defineConfig({
	integrations: [
    svelte(), // Enable Svelte to support Svelte components.
  ],
  output: 'static',
  site: IS_CI ? 'https://uwhealth.github.io' : 'http://localhost',
  base: IS_CI ? '/donor-wall' : '',
});
