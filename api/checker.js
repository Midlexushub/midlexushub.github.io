export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed"
      });
    }

    const { id, zone } = req.body || {};

    if (!id || !zone) {
      return res.status(400).json({
        error: "ID dan Zone diperlukan"
      });
    }

    const url =
      "https://api.isan.eu.org/nickname/ml" +
      "?id=" + encodeURIComponent(id) +
      "&server=" + encodeURIComponent(zone) +
      "&decode=false";

    const response = await fetch(url);

    const text = await response.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({
        error: "Provider returned invalid response"
      });
    }

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Checker server error"
    });
  }
}
