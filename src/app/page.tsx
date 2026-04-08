import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ClipboardList,
  FlaskConical,
  ShieldCheck,
  TestTube2,
  Wallet,
} from "lucide-react";
import { AppFrame, DashboardHeading, MetricGrid, SectionCard, SimpleTable, StatusPill } from "@/components/screens/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockData } from "@/services/mock-data";
import { screenService } from "@/services/screen-service";

const quickActions = [
  {
    title: "إدارة الطلبات",
    description: "متابعة الطلبات الجديدة والطلبات قيد التنفيذ.",
    href: "/screens/orders_management",
    icon: ClipboardList,
  },
  {
    title: "تسجيل العينات",
    description: "استلام العينة والتحقق من بيانات المريض.",
    href: "/screens/sample_registration",
    icon: TestTube2,
  },
  {
    title: "إدخال النتائج",
    description: "إدخال النتائج الفنية ومراجعة القيم الحرجة.",
    href: "/screens/enhanced_results_entry_with_voice_search",
    icon: FlaskConical,
  },
  {
    title: "الفواتير والمدفوعات",
    description: "متابعة التحصيل والتغطيات التأمينية والفواتير.",
    href: "/screens/billing_payments",
    icon: Wallet,
  },
];

export default function HomePage() {
  const data = mockData.mainLayout;
  const categories = screenService.getCategories();

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <AppFrame brand="Clinical Nexus" profile="د. أحمد خالد" sideTitle="لوحة تحكم المختبر">
          <div className="space-y-6">
            <DashboardHeading
              eyebrow="نظام تشغيل فعلي"
              title="لوحة التحكم التنفيذية"
              description="واجهة تشغيل مركزية لإدارة الطلبات والعينات والنتائج والفواتير ضمن نظام LIMS عربي احترافي."
              actions={
                <>
                  <Link href="/modules">
                    <Button variant="secondary">مركز الوحدات</Button>
                  </Link>
                  <Link href="/screens/new_order_form">
                    <Button>
                      إنشاء طلب جديد
                      <ArrowLeft className="size-4" />
                    </Button>
                  </Link>
                </>
              }
            />

            <MetricGrid
              items={[
                { title: "الاستيعاب اليومي", value: "84%", tone: "primary" },
                { title: "قيم حرجة تحتاج اعتماد", value: "12", tone: "danger" },
                { title: "طلبات جديدة", value: "28", tone: "neutral" },
                { title: "عينات اليوم", value: "142", tone: "neutral" },
              ]}
            />

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <SectionCard title="آخر العمليات التشغيلية">
                <SimpleTable
                  columns={["رقم العينة", "اسم المريض", "نوع الفحص", "الوقت المتوقع", "الحالة"]}
                  rows={data.rows.map((row) => [
                    <span className="font-mono font-bold text-primary" key={row[0]}>
                      {row[0]}
                    </span>,
                    row[1],
                    row[2],
                    row[3],
                    <StatusPill
                      key={row[4]}
                      tone={row[4] === "قيد التحليل" ? "blue" : row[4] === "مكتمل" ? "green" : "orange"}
                    >
                      {row[4]}
                    </StatusPill>,
                  ])}
                />
              </SectionCard>

              <Card className="bg-card/90">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-primary">الجاهزية المؤسسية</p>
                      <h2 className="mt-2 text-2xl font-extrabold">وضع النظام التشغيلي</h2>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <ShieldCheck className="size-5" />
                    </div>
                  </div>
                  <div className="space-y-3 rounded-[24px] bg-muted/60 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-muted-foreground">الحالة العامة</span>
                      <StatusPill tone="green">مستقر</StatusPill>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-muted-foreground">تكامل الجودة</span>
                      <span className="font-mono text-lg font-extrabold text-foreground">98.6%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-muted-foreground">العناصر المعلقة</span>
                      <span className="font-mono text-lg font-extrabold text-destructive">04</span>
                    </div>
                  </div>
                  <Link href="/screens/enhanced_results_approval" className="block">
                    <Button className="w-full">
                      فتح شاشة اعتماد النتائج
                      <ArrowLeft className="size-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <SectionCard title="الوحدات السريعة">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.href} className="block">
                    <Card className="h-full border-white/60 bg-white/90 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_-22px_rgba(0,92,85,0.35)]">
                      <CardContent className="space-y-4 p-6">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                          <action.icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold">{action.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{action.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </SectionCard>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <Card className="bg-card/90">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-accent p-3 text-primary">
                      <Activity className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold">مؤشرات الأعمال</h2>
                      <p className="text-sm text-muted-foreground">ملخص سريع للحالة التشغيلية الحالية.</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {[
                      ["زمن الإنجاز المتوسط", "4.2h"],
                      ["نسبة التحقق من الجودة", "92%"],
                      ["الطلبات قيد الاعتماد", "12"],
                      ["إشغال الأجهزة", "84%"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3">
                        <span className="text-sm font-semibold text-muted-foreground">{label}</span>
                        <span className="font-mono text-lg font-extrabold text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <SectionCard title="خريطة الوحدات">
                <div id="modules" className="grid gap-4 md:grid-cols-2">
                  {categories.map((category) => (
                    <Link key={category.key} href="/modules" className="block">
                      <div className="rounded-[24px] border border-white/60 bg-white/90 p-5 transition hover:bg-accent/30">
                        <p className="text-sm font-bold text-primary">{category.key}</p>
                        <h3 className="mt-2 text-xl font-extrabold text-foreground">{category.label}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {category.screens.length} شاشات تشغيلية ضمن هذا المسار.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        </AppFrame>
      </div>
    </main>
  );
}
