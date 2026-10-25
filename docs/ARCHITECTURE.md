# Architecture

- frontend/index.html, frontend/script.js, and frontend/style.css provide the browser interface.
- api/polymarket-proxy.js forwards search parameters to the upstream service.
- vercel.json configures deployment behavior.

The proxy returns upstream JSON without a stable normalized schema. Validate optional fields before rendering and keep credentials and transaction signing outside this read-only prototype.