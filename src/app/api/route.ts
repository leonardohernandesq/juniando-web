export async function GET() {
  try {
    const response = await fetch("http://localhost:3000/mock-json/json.json", {
      cache: "no-store",
    });
    const json = await response.json();
    return Response.json(json);
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(error.message);
    }
    Response.json(error);
  }
}
