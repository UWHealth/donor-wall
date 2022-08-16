# UW Health Donor Wall

This repository uses [Astro](https://astro.build) and [Svelte](https://svelte.dev) for its build.
The project structure follows the conventions of those two frameworks (with some additions).

Both were chosen because of their great DX and their ability to produce small, performant, static files.

## Views
Views are the "pages" of the project. They can be accessed with paths that follow. 

* **Article View** (`/article` & `/article/[number]`) — Features a photo, a "Name Circle", a headline, and some paragraphs.
* **Name View** (`/name`) — Shows a "legacy donor"'s name in a faux-glass circle in front of some cycling colors.
* **Bubbles View** (`/bubbles-left` & `/bubbles-right`) — Displays some names in circles on a gradient.

## Colors

<!-- **Setting State**
On pages that allow for it, props can be set via global `SET_STATE` method on `window`. Any page prop can be set via this method. If you just want access to the current props, `GET_STATE` is also available.
All items in state will also show up in the url, and can be set via the url.  -->

**Colors**
A two-key object controls the gradients on most pages. The object contains `topColor` and `bottomColor` keys, which are being set via an animation.
The animation (using the web animation API) uses a set of 8 pre-defined colors to animate between (defined in `components/utils/colors.js`).

The colors object is wrapped in a Svelte store, which allows parts of the page to subscribe to its updates (via `subscribe` method). 
It's also possible to get the current set of colors using the global `COLORS` method (or `get` if you've imported `colors.js`).

## Building and environment

This project uses Node and npm, so the standard `npm install` is necessary to run the project initially.

Before building the project, these environment variables must be set:
```env
CONTENTFUL_HOST  # Contentful server
CONTENTFUL_ENV  # Contentful branch  
CONTENTFUL_SPACE_ID  # Contentful space ID
CONTENTFUL_ACCESSTOKEN # Contentful API key
CONTENTFUL_CONTENT_TYPE # Contentful entry ID
CONTENT_OUT_PATH  # relative path for where to store fetched 
SEARCH_APP_URL    # Full url for search application. Used to generate a QR Code
```

### Scripts reference
* `dev` && `start` - Start up a local development server.
* `build` - Build the project for production.
* `fetch` - Fetch content for the project from Contentful.
* `preview` - Run a local server on the `dist` folder. Effectively previewing a production environment.

For `build` and `fetch`, all of the above variables must be set.

Code for the Contentful fetching can be found in the `/scripts` folder.
