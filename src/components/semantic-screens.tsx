import Link from "next/link";
import {
  Bell,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  FlaskConical,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  TestTube2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Screen } from "@/lib/screens";

const semanticScreenSlugs = new Set([
  "splash_screen",
  "patient_portal_login",
  "main_layout",
  "enhanced_dashboard",
  "orders_management",
  "new_order_form",
  "sample_registration",
]);

export function hasSemanticScreen(slug: string) {
  return semanticScreenSlugs.has(slug);
}

export function SemanticScreen({ screen }: { screen: Screen }) {
  switch (screen.slug) {
    case "splash_screen":
      return <SplashScreen />;
    case "patient_portal_login":
      return <PatientPortalLoginScreen />;
    case "main_layout":
      return <MainLayoutScreen />;
    case "enhanced_dashboard":
      return <EnhancedDashboardScreen />;
    case "orders_management":
      return <OrdersManagementScreen />;
    case "new_order_form":
      return <NewOrderFormScreen />;
    case "sample_registration":
      return <SampleRegistrationScreen />;
    default:
      return null;
  }
}

function SplashScreen() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.07),transparent_28%),#f8fbfc] px-6 py-16 sm:px-12 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d9e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
      <div className="relative mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-[26px] teal-gradient text-white ambient-shadow">
          <MicroscopeMark />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
          Clinical Nexus
        </h1>
        <p className="mt-3 text-sm font-semibold tracking-[0.28em] text-muted-foreground uppercase">
          Advanced LIMS Ecosystem
        </p>
        <p className="mt-8 text-xl font-semibold text-muted-foreground">
          جاري تأمين الاتصال...
        </p>
        <p className="mt-2 font-mono text-sm tracking-[0.24em] text-slate-500 uppercase">
          Securing Connection...
        </p>
        <div className="mt-8 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[68%] rounded-full teal-gradient" />
        </div>
        <div className="mt-5 flex w-full max-w-md items-center justify-between text-xs font-semibold text-slate-400">
          <span className="font-mono">NODE: CL-772</span>
          <span className="font-mono">ISO 15189 AUTH</span>
        </div>
        <div className="mt-16 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 ambient-shadow">
          <ShieldCheck className="size-4 text-primary" />
          ISO 15189 Certified Laboratory System | Powered by AI
        </div>
      </div>
    </div>
  );
}

function PatientPortalLoginScreen() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#f8fbfc] px-6 py-12 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d9e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-70" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-[22px] teal-gradient text-white ambient-shadow">
            <MicroscopeMark />
          </div>
          <h1 className="text-4xl font-extrabold text-primary">Clinical Nexus</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            بوابة وصول المرضى للنتائج المخبرية
          </p>
        </div>
        <Card className="w-full max-w-xl bg-white/95">
          <CardContent className="space-y-5 p-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-foreground">تسجيل الدخول</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                يرجى إدخال بيانات العينة الخاصة بك لعرض النتائج
              </p>
            </div>
            <PortalField label="الرقم القومي" icon={<User className="size-4" />} />
            <PortalField
              label="باركود العينة/الطلب"
              icon={<FileText className="size-4" />}
              placeholder="LAB-12345678"
            />
            <div className="rounded-2xl bg-muted/80 p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">تأمين ثنائي الخطوات (2FA)</p>
                  <p className="text-xs leading-6 text-muted-foreground">
                    سنقوم بإرسال رمز تحقق إلى هاتفك المسجل لضمان خصوصية بياناتك الطبية.
                  </p>
                </div>
              </div>
            </div>
            <Button className="h-14 w-full text-base">عرض النتائج</Button>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span className="rounded-lg bg-muted px-3 py-2">ISO 15189 COMPLIANT</span>
              <span className="inline-flex items-center gap-2">
                SSL SECURED CONNECTION
                <ShieldCheck className="size-3.5 text-primary" />
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="mt-12 grid w-full max-w-4xl gap-5 sm:grid-cols-3">
          <FeatureNote title="دعم فني" text="متاح على مدار الساعة" />
          <FeatureNote title="نتائج فورية" text="بمجرد اعتمادها من المختبر" />
          <FeatureNote title="خصوصية تامة" text="تشفير كامل لجميع السجلات" />
        </div>
      </div>
    </div>
  );
}

function PortalField({
  label,
  placeholder = "أدخل القيمة",
  icon,
}: {
  label: string;
  placeholder?: string;
  icon: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-bold text-foreground">{label}</span>
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
        <Input placeholder={placeholder} className="pl-11" />
      </div>
    </label>
  );
}

function FeatureNote({ title, text }: { title: string; text: string }) {
  return (
    <Card className="bg-white/85">
      <CardContent className="text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
          <CheckCircle2 className="size-5" />
        </div>
        <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

function MainLayoutScreen() {
  return (
    <AppFrame brand="LIMS Precision" profile="د. أحمد خالد" sideTitle="نظام المختبر الطبي">
      <div className="space-y-6">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Card className="bg-gradient-to-br from-[#eaf7f4] via-white to-white">
            <CardContent className="p-7">
              <p className="text-sm font-semibold text-muted-foreground">الاستيعاب اليومي للمختبر</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-6xl font-extrabold text-primary">84%</p>
                  <p className="mt-1 text-sm text-primary">+12% اليوم</p>
                </div>
                <div className="flex flex-1 items-center gap-3 text-sm text-slate-500">
                  <span>Urine</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[76%] rounded-full bg-gradient-to-l from-primary to-teal-300" />
                  </div>
                  <span>Blood</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#ffe3de]">
            <CardContent className="flex h-full flex-col justify-between p-7">
              <div>
                <p className="text-sm font-semibold text-destructive">قيم حرجة</p>
                <p className="mt-3 font-mono text-5xl font-extrabold text-destructive">12</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-destructive">
                  فحص بانتظار الاعتماد الفوري
                </p>
              </div>
              <Button variant="destructive" className="mt-6 self-start">
                مراجعة الآن
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="border-b border-border/60 px-6 py-5">
              <h2 className="text-2xl font-extrabold text-foreground">آخر العينات المستلمة</h2>
            </div>
            <div className="grid grid-cols-[1.1fr_1.4fr_1.2fr_1fr_0.8fr] gap-4 px-6 py-4 text-sm font-semibold text-slate-500">
              <span>رقم العينة</span>
              <span>اسم المريض</span>
              <span>نوع الفحص</span>
              <span>الوقت المتوقع</span>
              <span>الحالة</span>
            </div>
            {[
              ["LAB-2026-00123", "أحمد سمير علي", "CBC + HbA1c", "14:30", "قيد التحليل"],
              ["LAB-2026-00124", "منى ناصر الموسوي", "Liver Function Test", "16:00", "بانتظار التأكيد"],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[1.1fr_1.4fr_1.2fr_1fr_0.8fr] gap-4 px-6 py-5 text-sm hover:bg-muted/55"
              >
                <span className="font-mono font-bold text-primary">{row[0]}</span>
                <span className="font-semibold">{row[1]}</span>
                <span>{row[2]}</span>
                <span className="font-mono">{row[3]}</span>
                <StatusPill tone={row[4] === "قيد التحليل" ? "blue" : "orange"}>{row[4]}</StatusPill>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-5 lg:grid-cols-3">
          <InfoMiniCard title="مخزون منخفض" subtitle="أنابيب CBC" tone="rose" />
          <InfoMiniCard title="مستوى آمن" subtitle="الكواشف الكيميائية" tone="teal" />
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-extrabold">تتبع عينة LAB-2026-00123</h3>
              <div className="mt-5 space-y-4">
                {[
                  "تم استلام العينة",
                  "المعالجة المسبقة",
                  "قيد التحليل الكيميائي",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className={`size-4 rounded-full ${index < 2 ? "bg-primary" : "bg-slate-300"}`}
                    />
                    <span className="text-sm font-semibold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function EnhancedDashboardScreen() {
  return (
    <AppFrame brand="سينابس" profile="د. أحمد المحمدي" sideTitle="نظام إدارة المختبرات">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-foreground">لوحة تحكم النشاط اليومي</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              أهلاً بك مجددًا. يظهر بسرعة أين يسير العمل اليوم.
            </p>
          </div>
          <div className="flex gap-3">
            <Button>تصدير التقرير</Button>
            <Button variant="secondary">تحديث تلقائي</Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <MetricTile title="إيرادات اليوم" value="32,840" unit="SAR" />
          <MetricTile title="نتائج حرجة" value="04" danger />
          <MetricTile title="عينات قيد الانتظار" value="28" />
          <MetricTile title="إجمالي الطلبات اليوم" value="142" />
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold">زمن إنجاز الفحوصات (TAT)</h2>
                <div className="text-sm text-muted-foreground">متوسط خلال آخر 6 ساعات</div>
              </div>
              <div className="mt-8 flex h-64 items-end justify-between gap-4">
                {[52, 74, 43, 88, 71, 49].map((value, index) => (
                  <div key={index} className="flex w-full flex-col items-center gap-3">
                    <div
                      className={`w-full rounded-t-2xl ${index === 3 ? "bg-destructive" : "bg-primary/75"}`}
                      style={{ height: `${value * 2}px` }}
                    />
                    <span className="font-mono text-xs text-slate-400">
                      {["18:00", "16:00", "14:00", "12:00", "10:00", "08:00"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-extrabold">تنبيهات المختبر</h2>
              <AlertCard
                title="فشل الجودة (QC Failure)"
                text="جهاز Cobas 6000 ALT/AST خارج النطاق المسموح."
                tone="red"
              />
              <AlertCard
                title="عينة متأخرة"
                text="CBC لعينة خارجية تجاوز هدف التتبع."
                tone="amber"
              />
              <AlertCard
                title="تم ربط جهاز المناوبات"
                text="التكامل مع جهاز Architect 2000SR نشط."
                tone="green"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function OrdersManagementScreen() {
  return (
    <AppFrame brand="LIMS Curator" profile="Clinical Ops" sideTitle="إدارة الطلبات">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center sm:text-right">
            <h1 className="text-4xl font-extrabold">Orders Management</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              ISO 15189 Certified Diagnostic Workflow
            </p>
          </div>
          <div className="flex gap-3">
            <Button>Create New Order</Button>
            <Button variant="secondary">Export CSV</Button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          <MetricTile title="Critical" value="03" danger />
          <MetricTile title="Awaiting" value="08" />
          <MetricTile title="Processing" value="12" />
          <MetricTile title="Active" value="42" />
        </div>

        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="grid gap-3 md:grid-cols-[0.15fr_0.4fr_0.4fr_0.55fr]">
              <Button variant="secondary" size="icon">
                <Search className="size-4" />
              </Button>
              <Input placeholder="Any Status" />
              <Input placeholder="All Sections" />
              <Input placeholder="Jan 20, 2026 - Jan 27, 2026" className="font-mono" />
            </div>

            <div className="grid grid-cols-[0.6fr_0.8fr_1fr_1.1fr_1.1fr_1fr_0.55fr] gap-4 border-b border-border/60 pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              <span>Actions</span>
              <span>Req. Date</span>
              <span>Status</span>
              <span>Lab Section</span>
              <span>Referring Doctor</span>
              <span>Patient</span>
              <span>Select</span>
            </div>

            {[
              ["عرض", "Jan 27, 2026 09:15", "Centrifuged", "Chemistry", "Dr. Sarah Al-Fahad", "أحمد محمد آن", false],
              ["عرض", "Jan 27, 2026 10:30", "Received", "Hematology", "Dr. Robert Chen", "فاطمة الزهراء علي", false],
              ["عرض", "Jan 27, 2026 11:02", "Analyzed", "Emergency Unit", "Urgent", "يوسف إبراهيم خليل", true],
            ].map((row) => (
              <div
                key={row[1] as string}
                className={`grid grid-cols-[0.6fr_0.8fr_1fr_1.1fr_1.1fr_1fr_0.55fr] gap-4 rounded-2xl px-2 py-4 text-sm ${
                  row[6] ? "bg-[#fff1ef]" : "hover:bg-muted/55"
                }`}
              >
                <span>{row[0]}</span>
                <span className="font-mono">{row[1]}</span>
                <StatusPill
                  tone={
                    row[2] === "Analyzed"
                      ? "orange"
                      : row[2] === "Received"
                        ? "green"
                        : "blue"
                  }
                >
                  {row[2] as string}
                </StatusPill>
                <span>{row[3]}</span>
                <span>{row[4]}</span>
                <span className="font-semibold">{row[5]}</span>
                <input type="checkbox" className="size-4 accent-[var(--primary)]" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppFrame>
  );
}

function NewOrderFormScreen() {
  return (
    <AppFrame brand="LIMS Curator" profile="Clinical Ops" sideTitle="New Order">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-8 rounded-[28px] bg-white p-6 ambient-shadow">
          {[
            ["Clinical Data", true],
            ["Test Selection", true],
            ["Patient Selection", false],
          ].map((step, index) => (
            <div key={step[0]} className="flex items-center gap-5">
              <div className="text-center">
                <div
                  className={`mx-auto flex size-12 items-center justify-center rounded-2xl ${
                    step[1] ? "teal-gradient text-white" : "bg-muted text-slate-500"
                  }`}
                >
                  {index === 0 ? <FileText className="size-5" /> : index === 1 ? <FlaskConical className="size-5" /> : <User className="size-5" />}
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{step[0]}</p>
              </div>
              {index < 2 ? <div className="hidden h-0.5 w-24 bg-primary/35 sm:block" /> : null}
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.42fr_1fr]">
          <div className="space-y-5">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold">أحمد عبدالله القحطاني</h3>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                    <User className="size-5" />
                  </div>
                </div>
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <MiniData title="تاريخ الزيارة" value="12/05/2023" />
                  <MiniData title="فصيلة الدم" value="O+ (Positive)" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1f2937] text-white">
              <CardContent className="space-y-3 p-6">
                <h4 className="text-lg font-extrabold">تعليمات العينة</h4>
                <p className="text-sm leading-7 text-slate-300">
                  تحاليل الدهون تتطلب صيامًا 8 ساعات على الأقل. يرجى التأكد من سحب
                  العينة بهذه الخطوة الآلية.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="space-y-6 p-8">
              <div>
                <div className="mb-2 inline-flex rounded-full bg-[#b36a45]/10 px-3 py-1 text-xs font-bold text-[#9b5a39]">
                  CLINICAL PHASE
                </div>
                <h1 className="text-4xl font-extrabold">البيانات السريرية</h1>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  يرجى إدخال التفاصيل الطبية اللازمة للتشخيص
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <label className="space-y-2">
                  <span className="text-sm font-bold">الطبيب المحول</span>
                  <Input placeholder="د. أحمد المنصوري - استشاري باطنية" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-bold">الأولوية</span>
                  <Input placeholder="عادي" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-bold">الحالة</span>
                  <Input placeholder="مستعجل (STAT)" />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-bold">التاريخ المرضي / ملاحظات</span>
                <textarea
                  className="ghost-outline min-h-36 w-full rounded-[24px] bg-card p-4 text-sm outline-none focus-visible:ring-4 focus-visible:ring-ring/70"
                  placeholder="اكتب أي ملاحظات سريرية أو أدوية حالية..."
                />
              </label>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function SampleRegistrationScreen() {
  return (
    <AppFrame brand="Clinical Curator LIMS" profile="Main Laboratory" sideTitle="تسجيل العينات">
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[0.38fr_1fr]">
          <div className="space-y-5">
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-extrabold">معاينة الباركود</h3>
                <div className="rounded-[24px] bg-muted p-6 text-center">
                  <div className="mx-auto h-28 w-48 rounded-xl bg-white p-4 ambient-shadow">
                    <div className="mt-2 flex h-12 items-end justify-between gap-1">
                      {Array.from({ length: 18 }).map((_, index) => (
                        <span
                          key={index}
                          className="w-full rounded-sm bg-slate-800"
                          style={{ height: `${20 + ((index * 11) % 28)}px` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 font-mono text-xs text-slate-500">LAB-2026-00482</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full">
                  إعدادات الطباعة
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-5 p-6">
                <h4 className="text-lg font-extrabold">مسار العينة</h4>
                {[
                  ["إنشاء طلب الفحص", true],
                  ["تسجيل واستلام العينة", true],
                  ["بدء التحليل المخبري", false],
                ].map((step) => (
                  <div key={step[0]} className="flex items-center gap-3">
                    <span className={`size-4 rounded-full ${step[1] ? "bg-primary" : "bg-slate-300"}`} />
                    <span className="text-sm font-semibold text-slate-600">{step[0]}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-5">
            <Card>
              <CardContent className="space-y-5 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-4xl font-extrabold">تسجيل العينات</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      إدخال بيانات المختبر وتحديد نوع العينة وربطها بطلبات المرضى
                    </p>
                  </div>
                  <StatusPill tone="green">Received</StatusPill>
                </div>

                <div className="rounded-[28px] bg-muted/60 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">اسم المريض</p>
                      <h2 className="mt-2 text-2xl font-extrabold">أشرف جلال فهيم</h2>
                      <p className="mt-2 font-mono text-sm text-slate-500">MRN - 2024-8831</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 rounded-2xl bg-[linear-gradient(135deg,#d6ecf0,#9ab8c7)]" />
                      <div className="text-sm text-slate-600">
                        <p>54 سنة / ذكر</p>
                        <p>د. سارة جلال (باطنية)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold">رقم تعريف العينة</span>
                    <Input placeholder="LAB-2026-00482" className="font-mono" />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold">نوع العينة</span>
                    <Input placeholder="Blood (EDTA)" />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold">مستوى الاستعجال</span>
                    <div className="flex gap-3">
                      <TagButton label="STAT" active tone="red" />
                      <TagButton label="Urgent" />
                      <TagButton label="Routine" />
                    </div>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold">وقت الجمع</span>
                    <Input placeholder="mm/dd/yyyy, --:-- --" className="font-mono" />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm font-bold">ملاحظات العينة</span>
                  <textarea
                    className="ghost-outline min-h-32 w-full rounded-[24px] bg-card p-4 text-sm outline-none focus-visible:ring-4 focus-visible:ring-ring/70"
                    placeholder="أي ملاحظات إضافية تخص جودة العينة أو حالة المريض..."
                  />
                </label>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between gap-4">
              <Button className="h-14 min-w-56">حفظ وتسجيل في النظام</Button>
              <Button size="lg">Scan Barcode</Button>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

function AppFrame({
  children,
  brand,
  profile,
  sideTitle,
}: {
  children: React.ReactNode;
  brand: string;
  profile: string;
  sideTitle: string;
}) {
  const navItems = [
    { label: "الرئيسية", icon: LayoutDashboard, href: "/screens/main_layout" },
    { label: "الطلبات", icon: ClipboardList, href: "/screens/orders_management" },
    { label: "العينات", icon: TestTube2, href: "/screens/sample_registration" },
    { label: "النتائج", icon: FileText, href: "/screens/enhanced_dashboard" },
    { label: "الإعدادات", icon: Settings, href: "/" },
  ];

  return (
    <div className="grid min-h-[82vh] gap-6 lg:grid-cols-[1fr_270px]">
      <div className="space-y-6">
        <Card className="bg-white/90">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#d6ecf0,#9ab8c7)]" />
              <div>
                <p className="text-lg font-extrabold text-foreground">{profile}</p>
                <p className="text-xs font-semibold text-muted-foreground">ISO 15189 Certified</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input placeholder="...ابحث عن مريض أو مورد أو طلب" className="pr-11" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ActionIcon icon={<Bell className="size-4" />} />
              <ActionIcon icon={<Settings className="size-4" />} />
              <ActionIcon icon={<Bot className="size-4" />} />
            </div>
          </CardContent>
        </Card>
        {children}
      </div>

      <aside className="space-y-5">
        <Card className="sticky top-6 bg-white/90">
          <CardContent className="space-y-5 p-5">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-primary">{brand}</h2>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">{sideTitle}</p>
            </div>
            <Button className="w-full">
              <Plus className="size-4" />
              طلب جديد
            </Button>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-muted"
                >
                  <item.icon className="size-4 text-primary" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function MetricTile({
  title,
  value,
  unit,
  danger = false,
}: {
  title: string;
  value: string;
  unit?: string;
  danger?: boolean;
}) {
  return (
    <Card className={danger ? "bg-[#fff1ef]" : "bg-white/90"}>
      <CardContent className="space-y-3 p-6">
        <p className={`text-sm font-bold ${danger ? "text-destructive" : "text-muted-foreground"}`}>
          {title}
        </p>
        <div className="flex items-end gap-2">
          {unit ? <span className="font-mono text-sm font-bold text-slate-400">{unit}</span> : null}
          <span className={`font-mono text-5xl font-extrabold ${danger ? "text-destructive" : "text-foreground"}`}>
            {value}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function AlertCard({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "red" | "amber" | "green";
}) {
  const tones = {
    red: "border-r-destructive bg-[#fff1ef]",
    amber: "border-r-amber-500 bg-[#fff8e8]",
    green: "border-r-emerald-500 bg-[#eefaf5]",
  };

  return (
    <div className={`rounded-[24px] border-r-4 p-4 ${tones[tone]}`}>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function InfoMiniCard({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: "rose" | "teal";
}) {
  return (
    <Card className={tone === "rose" ? "bg-[#fff3ee]" : "bg-white/90"}>
      <CardContent className="space-y-4 p-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-muted text-primary">
          {tone === "rose" ? <Bell className="size-5" /> : <ShieldCheck className="size-5" />}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <h3 className="mt-2 text-3xl font-extrabold">{title}</h3>
        </div>
        <div className={`h-1.5 rounded-full ${tone === "rose" ? "bg-destructive" : "bg-primary"}`} />
      </CardContent>
    </Card>
  );
}

function MiniData({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-muted/60 p-4">
      <p className="text-xs font-bold text-muted-foreground">{title}</p>
      <p className="mt-2 font-semibold text-foreground">{value}</p>
    </div>
  );
}

function TagButton({
  label,
  active,
  tone,
}: {
  label: string;
  active?: boolean;
  tone?: "red";
}) {
  return (
    <button
      type="button"
      className={`rounded-2xl px-4 py-3 text-sm font-bold ${
        active
          ? tone === "red"
            ? "bg-[#fff1ef] text-destructive ghost-outline"
            : "teal-gradient text-white"
          : "bg-muted text-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

function StatusPill({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "blue" | "orange" | "red" | "cyan";
}) {
  const classes = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-sky-100 text-sky-700",
    orange: "bg-amber-100 text-amber-700",
    red: "bg-rose-100 text-rose-700",
    cyan: "bg-cyan-100 text-cyan-700",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-bold ${classes[tone]}`}>{children}</span>;
}

function ActionIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex size-11 items-center justify-center rounded-2xl bg-muted text-slate-600 transition hover:bg-accent hover:text-primary"
    >
      {icon}
    </button>
  );
}

function MicroscopeMark() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="h-7 w-7 rounded-full border-2 border-current" />
      <div className="-mt-1 h-4 w-1.5 rounded-full bg-current" />
      <div className="mt-1 h-1.5 w-9 rounded-full bg-current" />
    </div>
  );
}
