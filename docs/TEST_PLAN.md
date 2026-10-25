# Test plan

Run npm test with network fetch stubbed. Check default query values, URL encoding, successful JSON passthrough, CORS behavior, and upstream failures. Before deployment, test invalid limits, long queries, timeouts, non-JSON responses, and empty or malformed results in the frontend.