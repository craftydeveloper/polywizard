export default async function handler(req, res) {
  const { q = "sports", limit = 20 } = req.query;
  const url = `https://gamma-api.polymarket.com/markets?active=true&limit=${limit}&order=created_at&search=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
