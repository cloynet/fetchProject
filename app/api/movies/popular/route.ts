import { NextResponse } from "next/server";
import { getPopularMovies } from "@/lib/getPopularMovies";

export async function GET() {
  try {
    const data = await getPopularMovies();
    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = "Popular movies could not be retrieved.";

    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
