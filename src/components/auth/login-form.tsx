"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("admin@clinicalnexus.ai");
  const [password, setPassword] = useState("Admin123!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const payload = (await response.json()) as { ok: boolean; message?: string };

    if (!response.ok || !payload.ok) {
      setError(payload.message ?? "تعذر تسجيل الدخول.");
      setLoading(false);
      return;
    }

    router.push(nextPath);
    router.refresh();
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,#eef7f5,transparent_35%),#f7fafb] px-4 py-10">
      <Card className="w-full max-w-xl overflow-hidden bg-white/95">
        <CardContent className="space-y-6 p-8 sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-[24px] teal-gradient text-white ambient-shadow">
              <ShieldCheck className="size-7" />
            </div>
            <p className="mt-5 text-sm font-bold text-primary">Clinical Nexus Enterprise</p>
            <h1 className="mt-2 text-4xl font-extrabold text-foreground">تسجيل الدخول إلى النظام</h1>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              دخول احترافي للوحة تشغيل المختبر، مع جلسة محمية وصلاحيات جاهزة للربط لاحقًا.
            </p>
          </div>

          <div className="grid gap-4">
            <label className="space-y-2">
              <span className="text-sm font-bold text-foreground">البريد الإلكتروني</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="pr-11 font-latin"
                  placeholder="admin@clinicalnexus.ai"
                />
              </div>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-foreground">كلمة المرور</span>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="pr-11 font-latin"
                  placeholder="Admin123!"
                />
              </div>
            </label>
          </div>

          {error ? (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
          ) : null}

          <Button className="h-12 w-full" onClick={handleLogin} disabled={loading}>
            {loading ? "جارٍ تسجيل الدخول..." : "دخول لوحة التشغيل"}
            <ArrowLeft className="size-4" />
          </Button>

          <div className="rounded-[24px] bg-muted/70 p-5">
            <p className="text-sm font-extrabold text-foreground">حسابات تجريبية</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-bold text-foreground">Admin:</span>{" "}
                <span className="font-latin">admin@clinicalnexus.ai / Admin123!</span>
              </p>
              <p>
                <span className="font-bold text-foreground">Pathologist:</span>{" "}
                <span className="font-latin">pathology@clinicalnexus.ai / Path123!</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
