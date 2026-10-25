# Proxy API

The serverless handler reads q and limit from the request query and applies source defaults when they are absent. It requests active listings ordered by creation time and returns the upstream JSON body.

The current handler does not enforce an HTTP method, maximum limit, or response schema. Add bounded input validation, a timeout, and documented error codes before relying on it as a public API. Review its permissive CORS response before production.