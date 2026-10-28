# Pikobuy Sheet — pikobuysheet.fi

Astro static site source for the Pikobuy Sheet review. It uses the product export in `public/data/catalog.json` and includes nine language routes and ten SEO guides.

## Build

Use Node.js 22.23.4 or newer (Astro 7 requires it):

```sh
npm ci
npm run build
```

The static output is `dist/`. Configure the hosting project root as `pikobuysheet-fi`, the build command as `npm run build`, and the output directory as `dist`. The site expects to be hosted at the root of a domain; it does not use a `/pikobuysheet-fi/` URL prefix. Uploading this folder to GitHub by itself does not connect a domain or configure hosting.

The project currently retains the review site's `noindex,nofollow` robots setting in `src/layouts/Base.astro`. Review and change this when the site is ready for search indexing. The `public/_headers` file contains cache rules for hosts that support that format. The product export is a dated snapshot; QC photo data and image-search services are not included in that export. Registration and product purchase links point to PikoBuy.
