import { NextResponse } from "next/server";
import { getMovie } from "@/lib/getMovie";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, { params }: Params) {
  try {
    const awaitedParams = await params;
    const data = await getMovie(awaitedParams.id);
    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = "Movies could not be retrieved.";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
