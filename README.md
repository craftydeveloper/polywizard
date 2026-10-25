# PolyWizard

PolyWizard is a browser interface for discovering public prediction-market listings through a small serverless proxy. The handler forwards a search term and result limit to the upstream market-data endpoint and returns its JSON response.

## Run and test

The frontend lives in frontend/, the proxy in api/polymarket-proxy.js, and deployment configuration in vercel.json. Run npm test to check the proxy contract with network calls stubbed.

## Boundary

This is a market-data explorer prototype. It does not authenticate users, hold funds, or submit orders. Market information may be delayed or incomplete; do not treat it as investment advice or an executable trading signal.