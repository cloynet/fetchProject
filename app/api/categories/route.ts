import { NextResponse } from "next/server";
import { getCategories } from "@/lib/getCategories";

export async function GET() {
  try {
    const data = await getCategories();
    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = "Kategoriler Alınamadı";

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
