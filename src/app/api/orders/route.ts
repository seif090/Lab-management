import { NextResponse } from "next/server";
import { orders } from "@/lib/mock-backend";

export async function GET() {
  return NextResponse.json({ items: orders });
}
