export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: cors
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/api/checker") {
      if (request.method !== "POST") {
        return new Response(
          JSON.stringify({
            error: "Method not allowed"
          }),
          {
            status: 405,
            headers: {
              "Content-Type": "application/json",
              ...cors
            }
          }
        );
      }

      try {
        const body = await request.json();
        const id = body.id;
        const zone = body.zone;

        if (!id || !zone) {
          return new Response(
            JSON.stringify({
              error: "ID dan Zone diperlukan"
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                ...cors
              }
            }
          );
        }

        const api =
          "https://api.isan.eu.org/nickname/ml" +
          "?id=" + encodeURIComponent(id) +
          "&server=" + encodeURIComponent(zone) +
          "&decode=false";

        const response = await fetch(api);
        const text = await response.text();

        return new Response(text, {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
            ...cors
          }
        });

      } catch (error) {
        return new Response(
          JSON.stringify({
            error: "Checker server error"
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...cors
            }
          }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
