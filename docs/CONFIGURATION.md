# Configuration

The current proxy uses a public upstream endpoint and does not require an API key or wallet credential. Deployment behavior is set by vercel.json. Never put a protected credential in browser code. If a future provider requires a key, keep it in the hosting secret manager and proxy only the minimum required data.