export const aboutView = () => `
  <h1>About this project</h1><p class="sub">A capstone demonstrating a production-style frontend.</p>
  <ul>
    <li><strong>Modular architecture:</strong> data, store, views and router modules.</li>
    <li><strong>Client-side routing:</strong> History API paths such as <code>/product/4</code>, with SPA rewrites configured for Vercel and Netlify.</li>
    <li><strong>Performance:</strong> no image downloads, minified and hashed bundles, no runtime dependencies.</li>
    <li><strong>Accessibility:</strong> semantic markup, labels, live regions and focus management.</li>
  </ul>`;

export const notFoundView = () => `<h1>Page not found</h1><p><a href="/" data-link>Return to catalog</a></p>`;
