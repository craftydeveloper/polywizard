# Security policy

Report concerns privately through the repository security advisory flow. Do not publish credentials or personal data.

The current proxy forwards search parameters to a public market-data service, returns upstream JSON, and permits cross-origin requests. Validate and cap query values, bound response size, add timeouts and rate limits, and review CORS before broad exposure. The project does not implement order execution or account access.