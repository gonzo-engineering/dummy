import { AUTHORS } from "$lib/constants";
import { json } from "@sveltejs/kit";

export async function GET() {
  return json(AUTHORS);
}
