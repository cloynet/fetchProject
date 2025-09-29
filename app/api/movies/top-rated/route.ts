import { NextResponse } from "next/server";
import { getTopRatedMovies } from "@/lib/getTopRatedMovies";

export async function GET() {
  try {
    const data = await getTopRatedMovies();
    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = "Top-rated movies could not be fetched.";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
