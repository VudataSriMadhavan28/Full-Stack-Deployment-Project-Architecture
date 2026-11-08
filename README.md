# Loom & Lathe: E-commerce Product Catalog

A modular, dependency-free single-page app built with Vite and vanilla JS.

## Run locally
    npm install
    npm run dev          # http://localhost:5173

## Production build
    npm run build        # minified, hashed assets in dist/
    npm run preview

## Structure
    src/
      data/products.js   product data
      store/cart.js      cart state + localStorage persistence
      views/             catalog, product, cart, about/404
      router.js          History API client-side router
      main.js            event wiring
      styles.css         theme tokens (light/dark) + layout
    public/              static files (favicon, future images)
    vercel.json          SPA rewrite for Vercel
    netlify.toml         build + SPA redirect for Netlify

## Deploy
Push to GitHub, then:
- **Vercel:** Add New Project, import the repo (Vite is auto-detected), Deploy.
- **Netlify:** Add new site, import the repo (settings come from netlify.toml), Deploy.
- **Render:** New Static Site, build command `npm run build`, publish directory `dist`,
  and add a rewrite rule `/*` to `/index.html`.

## Performance notes
- Product visuals are CSS gradients, so there are no image requests.
- For real photos: export WebP/AVIF, set width/height, and use loading="lazy".
- Run Lighthouse on the live URL after deploying.
