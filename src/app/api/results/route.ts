import { NextResponse } from "next/server";
import { results } from "@/lib/mock-backend";

export async function GET() {
  return NextResponse.json({ items: results });
}
