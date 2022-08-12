import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import 'dotenv/config';

// Set by github
const IS_CI = process.env.CI;
const IS_GITHUB = process.env.GITHUB_ACTIONS;
const IS_JENKINS = process.env.JENKINS;
const IS_PRD = IS_CI || process.env.NODE_ENV === "production" ? true : false;

// https://astro.build/config
export default defineConfig({
	integrations: [
    svelte(), // Enable Svelte to support Svelte components.
  ],
  output: 'static',
  vite: { build: { minify: false }},
  site: IS_GITHUB ? 'https://uwhealth.github.io' : IS_JENKINS ? 'https://uconnect.wisc.edu' : undefined,
  base: IS_GITHUB || IS_JENKINS ? '/donor-wall' : '',
});
