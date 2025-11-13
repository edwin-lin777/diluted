import { connectToDatabase } from "../../../lib/mongodb";

export async function GET(req) {
  const connection = await connectToDatabase();
  const db = connection.db;
  const data = await db
    .collection("Startups")
    .findOne(
      {},
      { projection: { id: 0, description: 1 } }
    );
  return new Response(
    JSON.stringify({
      description: data?.description || "No description found",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
