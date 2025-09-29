import { NextResponse } from "next/server";
import { getSingleCategory } from "@/lib/getSingleCategory";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, { params }: Params) {
  try {
    const awaitedParams = await params;

    const data = await getSingleCategory(awaitedParams.id);

    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = "Category could not be fetched.";

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
