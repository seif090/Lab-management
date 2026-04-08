import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE, demoUsers } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const user = demoUsers.find(
    (entry) => entry.email === body.email?.trim().toLowerCase() && entry.password === body.password,
  );

  if (!user) {
    return NextResponse.json(
      { ok: false, message: "بيانات الدخول غير صحيحة. استخدم الحساب التجريبي المتاح." },
      { status: 401 },
    );
  }

  const store = await cookies();
  store.set(AUTH_COOKIE, user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}
