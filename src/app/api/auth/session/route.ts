import { NextResponse } from "next/server";
import { getCurrentSession } from "@/lib/auth";

export async function GET() {
  const session = await getCurrentSession();

  return NextResponse.json({
    authenticated: Boolean(session),
    user: session
      ? {
          id: session.id,
          name: session.name,
          email: session.email,
          role: session.role,
        }
      : null,
  });
}
