import { NextResponse } from "next/server";
import { patients } from "@/lib/mock-backend";

export async function GET() {
  return NextResponse.json({ items: patients });
}
