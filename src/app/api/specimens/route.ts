import { NextResponse } from "next/server";
import { specimens } from "@/lib/mock-backend";

export async function GET() {
  return NextResponse.json({ items: specimens });
}
