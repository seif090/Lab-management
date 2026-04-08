import Link from "next/link";
import {
  Bell,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  FlaskConical,
  MessageSquare,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
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
  "enhanced_results_entry_with_voice_search",
  "enhanced_results_approval",
  "clinical_collaboration",
  "ai_diagnostic_hub",
  "enhanced_sample_rejection_with_voice_search",
  "enhanced_qc_dashboard",
  "patient_profile",
  "fast_search_patients_list",
  "test_catalog",
  "inventory_reagents",
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
    case "enhanced_results_entry_with_voice_search":
      return <ResultsEntryScreen />;
    case "enhanced_results_approval":
      return <ResultsApprovalScreen />;
    case "clinical_collaboration":
      return <ClinicalCollaborationScreen />;
    case "ai_diagnostic_hub":
      return <AiDiagnosticHubScreen />;
    case "enhanced_sample_rejection_with_voice_search":
      return <SampleRejectionScreen />;
    case "enhanced_qc_dashboard":
      return <QualityControlScreen />;
    case "patient_profile":
      return <PatientProfileScreen />;
    case "fast_search_patients_list":
      return <PatientsListScreen />;
    case "test_catalog":
      return <TestCatalogScreen />;
    case "inventory_reagents":
      return <InventoryScreen />;
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
            { label: "Clinical Data", active: true },
            { label: "Test Selection", active: true },
            { label: "Patient Selection", active: false },
          ].map((step, index) => (
            <div key={step.label} className="flex items-center gap-5">
              <div className="text-center">
                <div
                  className={`mx-auto flex size-12 items-center justify-center rounded-2xl ${
                    step.active ? "teal-gradient text-white" : "bg-muted text-slate-500"
                  }`}
                >
                  {index === 0 ? <FileText className="size-5" /> : index === 1 ? <FlaskConical className="size-5" /> : <User className="size-5" />}
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{step.label}</p>
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
                  { label: "إنشاء طلب الفحص", active: true },
                  { label: "تسجيل واستلام العينة", active: true },
                  { label: "بدء التحليل المخبري", active: false },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <span className={`size-4 rounded-full ${step.active ? "bg-primary" : "bg-slate-300"}`} />
                    <span className="text-sm font-semibold text-slate-600">{step.label}</span>
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

function ResultsEntryScreen() {
  return (
    <AppFrame brand="سينابس" profile="د. أحمد المحمدي" sideTitle="إدخال النتائج">
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.72fr]">
        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-5 p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-extrabold">إدخال النتائج المخبرية</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    كيمياء حيوية - إدخال النتائج والتحقق من القيم الحرجة
                  </p>
                </div>
                <StatusPill tone="green">24 مهمة نشطة</StatusPill>
              </div>

              <div className="rounded-[28px] bg-muted/60 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-3xl font-extrabold">أحمد محمود حسين</p>
                    <p className="mt-2 font-mono text-sm text-slate-500">MRN 2026-00451</p>
                  </div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
                    <User className="size-6" />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-white">
                <div className="grid grid-cols-[0.9fr_0.8fr_0.8fr_0.9fr_0.85fr_1.15fr] gap-4 border-b border-border/60 px-6 py-4 text-sm font-bold text-slate-500">
                  <span>الحالة</span>
                  <span>المقارنة السابقة</span>
                  <span>المدى المرجعي</span>
                  <span>النتيجة</span>
                  <span>الجهاز</span>
                  <span>TEST</span>
                </div>
                {[
                  ["Normal", "92", "70 - 100", "5", "Cobas 6000", "Glucose (Fasting)", "green"],
                  ["Critical High", "> 8.1", "4.0 - 5.6", "5", "BioRad D-10", "HbA1c", "red"],
                  ["High", "198", "< 200", "5", "Cobas 6000", "Total Cholesterol", "orange"],
                ].map((row) => (
                  <div
                    key={row[5]}
                    className={`grid grid-cols-[0.9fr_0.8fr_0.8fr_0.9fr_0.85fr_1.15fr] gap-4 px-6 py-5 text-sm ${
                      row[6] === "red" ? "bg-[#fff5f3]" : "hover:bg-muted/50"
                    }`}
                  >
                    <StatusPill tone={row[6] as "green" | "red" | "orange"}>{row[0]}</StatusPill>
                    <span className="font-mono">{row[1]}</span>
                    <span className="font-mono">{row[2]}</span>
                    <span className="font-mono text-xl font-extrabold text-foreground">{row[3]}</span>
                    <span>{row[4]}</span>
                    <span className="font-semibold">{row[5]}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[0.6fr_1fr]">
                <Card className="bg-[#f2fbf9]">
                  <CardContent className="space-y-3 p-5">
                    <h3 className="text-lg font-extrabold text-primary">تحليل الدلتا</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      تم رصد ارتفاع في HbA1c بنسبة 54% مقارنة بآخر تقرير معتمد.
                    </p>
                    <div className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-emerald-700">
                      OK 100% الأجهزة مفعلة
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-3 p-5">
                    <h3 className="text-lg font-extrabold">ملاحظات فنية</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Repeated", "Hemolyzed", "Lipemic", "Dilution 1:10"].map((tag) => (
                        <span key={tag} className="rounded-full bg-muted px-3 py-2 text-xs font-bold text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <textarea
                      className="ghost-outline min-h-24 w-full rounded-[20px] bg-card p-4 text-sm outline-none focus-visible:ring-4 focus-visible:ring-ring/70"
                      placeholder="أضف ملاحظات فنية إضافية..."
                    />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold">قائمة المهام</h2>
                <StatusPill tone="blue">STAT</StatusPill>
              </div>
              {[
                { id: "#2026-00451", name: "أحمد محمود حسين", panel: "Chemistry Panel", active: true },
                { id: "#2026-00452", name: "ليلى عبدالرحمن القحطاني", panel: "Lipid Profile + TSH", active: false },
                { id: "#2026-00453", name: "محمد علي الصالح", panel: "Thyroid Profile", active: false },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`rounded-[24px] border px-4 py-4 ${item.active ? "border-primary bg-[#f3fbf9]" : "border-transparent bg-muted/50"}`}
                >
                  <p className="font-mono text-xs text-slate-400">{item.id}</p>
                  <p className="mt-1 text-lg font-extrabold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.panel}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Button className="h-14 w-full">طلب جديد</Button>
        </div>
      </div>
    </AppFrame>
  );
}

function ResultsApprovalScreen() {
  return (
    <AppFrame brand="Clinical Nexus" profile="د. أحمد منصور" sideTitle="اعتماد النتائج">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.72fr]">
        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-6 p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-extrabold">اعتماد النتائج الطبية</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    مراجعة نهائية قبل التوقيع وإصدار التقرير
                  </p>
                </div>
                <div className="flex gap-3">
                  <StatusPill tone="red">STAT 4</StatusPill>
                  <StatusPill tone="green">Pending 12</StatusPill>
                </div>
              </div>

              <div className="rounded-[28px] bg-muted/60 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-extrabold">سارة محمود العبادي</h2>
                    <p className="mt-2 font-mono text-sm text-slate-500">LAB-2026-00124</p>
                  </div>
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-accent text-primary">
                    <User className="size-7" />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-white">
                <div className="grid grid-cols-[0.8fr_0.75fr_0.8fr_0.75fr_0.9fr_1.1fr] gap-4 border-b border-border/60 px-6 py-4 text-sm font-bold text-slate-500">
                  <span>QC Status</span>
                  <span>Delta</span>
                  <span>Reference</span>
                  <span>Result</span>
                  <span>Flag</span>
                  <span>Test</span>
                </div>
                {[
                  ["Verified", "12.1", "12.0 - 15.5", "12.4 g/dL", "--", "Hemoglobin (HGB)", "green"],
                  ["Verified", "2.4", "14.0 >", "42.8 ng/L", "High", "Troponin I", "red"],
                  ["Verified", "156", "70 - 140", "148 mg/dL", "Up", "Glucose (Random)", "orange"],
                ].map((row) => (
                  <div key={row[5]} className={`grid grid-cols-[0.8fr_0.75fr_0.8fr_0.75fr_0.9fr_1.1fr] gap-4 px-6 py-5 text-sm ${row[6] === "red" ? "bg-[#fff5f3]" : "hover:bg-muted/50"}`}>
                    <StatusPill tone={row[6] === "green" ? "green" : "blue"}>{row[0]}</StatusPill>
                    <span className="font-mono">{row[1]}</span>
                    <span className="font-mono">{row[2]}</span>
                    <span className="font-mono text-xl font-extrabold">{row[3]}</span>
                    <span>{row[4]}</span>
                    <span className="font-semibold">{row[5]}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Card>
                  <CardContent className="space-y-3 p-5">
                    <h3 className="text-lg font-extrabold">إضافة تفسير سريري</h3>
                    <textarea className="ghost-outline min-h-28 w-full rounded-[22px] bg-card p-4 text-sm outline-none focus-visible:ring-4 focus-visible:ring-ring/70" placeholder="أدخل الرأي الطبي أو correlation..." />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-3 p-5">
                    <h3 className="text-lg font-extrabold">Technical Comments</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Sample was slightly hemolyzed. Repeated test confirmed high troponin value.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="min-w-52">Approve and Sign Results</Button>
                <Button variant="secondary" className="min-w-44">
                  Reject / Return to Lab
                </Button>
                <span className="self-center text-sm font-semibold text-destructive">
                  Critical value alert triggered. Clinical correlation required.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold">Queue List</h2>
                <span className="text-sm text-muted-foreground">Sort by time</span>
              </div>
              {[
                { id: "LAB-2026-00124", name: "سارة محمود العبادي", dept: "Cardiology", active: true },
                { id: "LAB-2026-00125", name: "ياسين إبراهيم الخليل", dept: "Endocrine", active: false },
                { id: "LAB-2026-00128", name: "فاطمة ناصر الزهراني", dept: "OBGYN", active: false },
              ].map((item) => (
                <div key={item.id} className={`rounded-[24px] px-4 py-4 ${item.active ? "border border-primary bg-[#f3fbf9]" : "bg-muted/50"}`}>
                  <p className="font-mono text-xs text-slate-400">{item.id}</p>
                  <p className="mt-1 text-lg font-extrabold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.dept}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function ClinicalCollaborationScreen() {
  return (
    <AppFrame brand="Clinical Curator LIMS" profile="Core Laboratory" sideTitle="التعاون السريري">
      <div className="grid gap-6 xl:grid-cols-[0.44fr_1fr_0.46fr]">
        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <StatusPill tone="orange">ACTIVE CONSULTATION</StatusPill>
                <span className="font-mono text-xs text-slate-400">#REF-2023-9942</span>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Case Study: Mixed Cell Adenocarcinoma</h2>
                <p className="mt-2 text-sm text-muted-foreground">Patient: J. Doe | Age: 54 | Priority: High</p>
              </div>
              <div className="space-y-3">
                <FileRow title="Initial Lab Findings" subtitle="Uploaded 2h ago" />
                <FileRow title="Clinical History.pdf" subtitle="Radiology Reports included" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5">
              <h3 className="text-lg font-extrabold">Consensus Voting</h3>
              <VoteBar label="Benign - Suspicious" value={75} />
              <VoteBar label="Malignant (Stage 1)" value={25} tone="amber" />
              <Button variant="secondary" className="w-full">
                Cast Your Opinion
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Slide Viewer: H&E Stain</p>
                <span className="mt-1 inline-flex rounded-full bg-accent px-2 py-1 text-xs font-bold text-primary">
                  40x Zoom
                </span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <ActionIcon icon={<Search className="size-4" />} />
                <ActionIcon icon={<SlidersHorizontal className="size-4" />} />
              </div>
            </div>
            <div className="relative min-h-[640px] rounded-[28px] bg-[radial-gradient(circle_at_center,#f2f5d6,#d7e6c5_46%,#e9f2e2)] p-6">
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[36px] border-2 border-[#7e7d65] bg-[radial-gradient(circle_at_40%_35%,#a82bc4_0,#8c2aaa_20%,#e6c3d9_22%,#f0dccb_28%,#ab37af_34%,#a34eb5_42%,#c1bfd4_52%,#fff0de_74%,#d7e1be_100%)] shadow-inner" />
              <div className="absolute left-[43%] top-[31%] rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white ambient-shadow">
                Suspected Mitosis
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
                <AnnotationCard title="Dr. Aris Thorne" text="Cluster of atypical cells noted here." />
                <AnnotationCard title="System AI" text="High density cellular region identified." />
                <AnnotationCard title="Clear All" text="Live Annotations (3)" reverse />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Case Discussion</h2>
              <Button variant="secondary" size="sm">Export Case</Button>
            </div>
            <ChatBubble author="Dr. Sarah Chen" text="راجعت صور الأشعة، وتبدو الكتلة أكبر قليلًا من المتوقع." />
            <ChatBubble author="You (Pathologist)" text="يبدو أن هناك تمددًا نسيجيًا أثناء التثبيت. أركز على الدرجة النووية في المقطع 4B." mine />
            <ChatBubble author="Dr. Marcus Vance" text="هل تُظهر صبغة المناعة أي مؤشرات نوعية لهذا المتغير الخلوي؟" />
            <div className="rounded-2xl bg-muted/60 px-4 py-3 text-sm font-semibold text-slate-600">
              IHC_Panel_Results.csv shared by Dr. Sarah Chen
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-3">
              <Input placeholder="Type a message..." className="border-0 bg-transparent shadow-none" />
              <Button size="icon">
                <MessageSquare className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppFrame>
  );
}

function AiDiagnosticHubScreen() {
  return (
    <AppFrame brand="Precision LIMS" profile="Dr. Ahmed Khalil" sideTitle="AI Diagnostics">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.42fr]">
        <div className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <ImagePanel label="AI AUGMENTED LAYER" variant="left" />
            <ImagePanel label="ORIGINAL SPECIMEN" variant="right" />
          </div>

          <Card className="bg-[#1f2427] text-white">
            <CardContent className="flex items-center justify-between gap-4 p-4">
              <div className="flex gap-3">
                <Button>Export Analysis</Button>
                <Button variant="secondary">Magnification: 40x</Button>
              </div>
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-12 w-16 rounded-xl bg-white/10" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-5 p-6">
              <div>
                <h1 className="text-3xl font-extrabold text-primary">AI Diagnostics</h1>
                <p className="mt-1 font-mono text-sm text-slate-500">Case: LAB-2026-AI-882</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <MetricTile title="Anomalies" value="12" danger />
                <MetricTile title="AI Confidence" value="94.2%" />
              </div>
              <div className="rounded-[24px] bg-muted/60 p-5">
                <h3 className="text-lg font-extrabold">Visualization Filters</h3>
                <div className="mt-4 space-y-5">
                  <SliderRow label="Confidence Threshold" value={85} />
                  <SliderRow label="Heatmap Opacity" value={60} />
                </div>
              </div>
              <div className="space-y-3">
                <FeatureBox
                  title="High Risk"
                  badge="AI Prediction"
                  text="Cellular pleomorphism detected in Cluster 4A. Abnormal nuclei detected."
                />
                <FeatureBox
                  title="Dr. Khalil"
                  badge="Confirmed"
                  text="Morphological changes consistent with Grade II neoplasia."
                  subtle
                />
              </div>
            </CardContent>
          </Card>
          <Button className="h-14 w-full">Finalize Diagnostic Report</Button>
        </div>
      </div>
    </AppFrame>
  );
}

function SampleRejectionScreen() {
  return (
    <AppFrame brand="Clinical Nexus LIMS" profile="أ. فهد الشمري" sideTitle="رفض العينات">
      <div className="grid gap-6 xl:grid-cols-[0.38fr_1fr_0.52fr]">
        <div className="space-y-5">
          <Button className="w-full">اعتماد الرفض النهائي</Button>
          <Card>
            <CardContent className="space-y-4 p-5">
              <h3 className="text-lg font-extrabold">بيانات التوثيق الفني</h3>
              <MiniData title="فني المختبر المسؤول" value="فهد الشمري" />
              <div className="grid gap-3 sm:grid-cols-2">
                <MiniData title="رقم المحطة" value="WS-04" />
                <MiniData title="التوقيت" value="11:22:04" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#eefaf5]">
            <CardContent className="space-y-4 p-5">
              <h3 className="text-lg font-extrabold text-primary">طلب عينة بديلة</h3>
              <p className="text-sm leading-7 text-slate-600">
                يمكن طلب إعادة سحب عاجلة من الفريق السريري وإرفاق توجيه مباشر.
              </p>
              <Button className="w-full">إرسال طلب عينة جديدة</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="space-y-6 p-8">
            <div className="text-center">
              <p className="font-mono text-xs text-slate-400">ISO 15189 | REJECTION MANAGEMENT</p>
              <h1 className="mt-3 text-4xl font-extrabold">توثيق رفض العينة</h1>
              <p className="mt-2 text-sm text-muted-foreground">يجب توثيق جميع أسباب الرفض وسبل التواصل مع الفريق الطبي.</p>
            </div>

            <div className="rounded-[28px] bg-muted/60 p-6">
              <div className="flex items-center justify-between">
                <StatusPill tone="orange">PENDING REJECTION</StatusPill>
                <span className="font-mono text-sm text-primary">LAB-2026-00452</span>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <MiniData title="اسم المريض" value="ليلى عبدالرحمن القحطاني" />
                <MiniData title="الوحدة" value="Clinical Chemistry" />
                <MiniData title="نوع العينة" value="Serum (SST)" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold">أسباب الرفض المعيارية</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <SelectionCard title="Insufficient Volume" subtitle="حجم العينة غير كافٍ للاختبارات" active />
                <SelectionCard title="Hemolysis" subtitle="تحلل دم مؤثر على التحاليل" danger />
                <SelectionCard title="Mislabeling" subtitle="خطأ في بيانات المريض أو الملصق" />
                <SelectionCard title="Clotted Sample" subtitle="تجلط غير مرغوب في العينة" />
              </div>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-bold">TECHNICAL COMMENTS</span>
              <textarea className="ghost-outline min-h-28 w-full rounded-[24px] bg-card p-4 text-sm outline-none focus-visible:ring-4 focus-visible:ring-ring/70" placeholder="يرجى كتابة الملاحظات التقنية التفصيلية..." />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="اسم الطبيب المُبلغ" />
              <Input placeholder="وقت وتاريخ التواصل" className="font-mono" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">قرارات الرفض المعلقة</h2>
              <StatusPill tone="blue">4</StatusPill>
            </div>
            {[
              { id: "LAB-2026-00452", name: "ليلى عبدالرحمن القحطاني", dept: "Clinical Chemistry", active: true },
              { id: "LAB-2026-00458", name: "محمد خالد العتيبي", dept: "Hematology", active: false },
              { id: "LAB-2026-00460", name: "سارة منصور", dept: "Microbiology", active: false },
            ].map((item) => (
              <div key={item.id} className={`rounded-[24px] px-4 py-4 ${item.active ? "border border-primary bg-[#f3fbf9]" : "bg-muted/50"}`}>
                <p className="font-mono text-xs text-slate-400">{item.id}</p>
                <p className="mt-1 text-lg font-extrabold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.dept}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppFrame>
  );
}

function QualityControlScreen() {
  return (
    <AppFrame brand="LIMS Clinical Curator" profile="Dr. Sarah Ahmed" sideTitle="Quality Control">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <Button>Run System QC</Button>
          <Button variant="secondary">Export Report</Button>
          <Button variant="secondary">Calibration Log</Button>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          <InstrumentCard title="Architect i2000" section="IMMUNOASSAY" status="Operational" metricA="Stable" metricB="92%" />
          <InstrumentCard title="Sysmex XN" section="HEMATOLOGY" status="Maintenance" metricA="Ahmed S" metricB="12%" warning />
          <InstrumentCard title="Cobas 6000" section="CLINICAL CHEMISTRY" status="Operational" metricA="99.8%" metricB="84%" />
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.4fr_1fr]">
          <Card>
            <CardContent className="space-y-4 p-5">
              <h3 className="text-xl font-extrabold">Westgard Analysis</h3>
              {[
                ["1₃s Rule Violation", "Observed value exceeds 3SD.", "red"],
                ["1₂s Warning Rule", "Exceeds 2SD limit.", "orange"],
                ["2₂s Systematic Rule", "Clean", "green"],
              ].map((rule) => (
                <div key={rule[0]} className={`rounded-2xl p-4 ${rule[2] === "red" ? "bg-[#fff1ef]" : rule[2] === "orange" ? "bg-[#fff8e8]" : "bg-[#eefaf5]"}`}>
                  <p className="font-bold">{rule[0]}</p>
                  <p className="mt-2 text-sm text-slate-600">{rule[1]}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold">Levey-Jennings</h2>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Monthly View</Button>
                  <Button variant="secondary" size="sm">Daily View</Button>
                </div>
              </div>
              <QcChart />
              <div className="grid gap-4 sm:grid-cols-4">
                <MiniData title="Samples Count" value="42" />
                <MiniData title="% Coeff. Var" value="1.44%" />
                <MiniData title="Stand. Dev" value="1.45" />
                <MiniData title="Mean" value="100.20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function PatientProfileScreen() {
  return (
    <AppFrame brand="Clinical Ops" profile="سارة أحمد الهاشمي" sideTitle="ملف المريض">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.36fr]">
        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-6 p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold">سارة أحمد الهاشمي</h1>
                  <p className="mt-2 font-mono text-sm text-slate-500">UID: 2024-8842-ML</p>
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#d6ecf0,#9ab8c7)] text-primary">
                  <User className="size-10" />
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <DetailGroup
                  title="البيانات الديموغرافية"
                  items={[
                    ["الجنس", "أنثى"],
                    ["تاريخ الميلاد", "2020-01-12"],
                    ["الجنسية", "السعودية"],
                    ["رقم الهوية/الإقامة", "1029384756"],
                  ]}
                />
                <DetailGroup
                  title="معلومات الاتصال"
                  items={[
                    ["الهاتف", "456 123 50 966+"],
                    ["البريد الإلكتروني", "sara.alhashmi@example.com"],
                    ["ولي الأمر", "إبراهيم الهاشمي"],
                    ["العنوان", "حي الربوة - جدة"],
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold">نظرة عامة على المؤشرات الرئيسية</h2>
                <StatusPill tone="blue">HbA1c</StatusPill>
              </div>
              <div className="flex h-52 items-end justify-between gap-4">
                {[5.8, 5.9, 6.0, 6.2].map((value, index) => (
                  <div key={index} className="flex w-full flex-col items-center gap-3">
                    <div className={`w-full rounded-t-2xl ${index === 0 ? "bg-primary" : "bg-primary/25"}`} style={{ height: `${value * 28}px` }} />
                    <span className="text-xs font-mono text-slate-400">{["Q4 2023", "Q3 2023", "Q2 2023", "Q1 2023"][index]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardContent className="space-y-3 p-5">
              <h3 className="text-lg font-extrabold">المعلومات الشخصية</h3>
              {["سجل الطلبات", "الزيارات السابقة", "المرفقات الطبية", "الملاحظات الطبية"].map((item, index) => (
                <div key={item} className={`rounded-2xl px-4 py-3 text-sm font-bold ${index === 0 ? "bg-primary text-white" : "bg-muted/50 text-slate-600"}`}>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-[#fff1ef]">
            <CardContent className="p-5">
              <p className="text-lg font-extrabold text-destructive">قاصر تحت سن الرعاية</p>
              <p className="mt-2 text-sm text-slate-600">Policy #98-002-L</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function PatientsListScreen() {
  return (
    <AppFrame brand="Clinical Ops" profile="Clinical Registry" sideTitle="سجل المرضى">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">سجل المرضى</h1>
          <p className="mt-2 text-sm text-muted-foreground">إدارة بيانات المرضى والبحث السريع عن الملفات الطبية</p>
        </div>

        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input placeholder="بحث ذكي: ابحث بالاسم أو رقم الهوية أو الباركود..." className="pr-11" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">الكل</Button>
              <Button variant="secondary">نتائج حرجة</Button>
              <Button variant="secondary">مواعيد اليوم</Button>
              <Button variant="secondary">عينات معلقة</Button>
              <Button variant="secondary">حالة STAT</Button>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white">
              <div className="grid grid-cols-[0.9fr_1.1fr_0.8fr_0.8fr_0.8fr_0.75fr] gap-4 border-b border-border/60 px-6 py-4 text-sm font-bold text-slate-500">
                <span>رقم الملف</span>
                <span>اسم المريض</span>
                <span>العمر/النوع</span>
                <span>آخر زيارة</span>
                <span>الطلبات</span>
                <span>الحالة</span>
              </div>
              {[
                ["LAB-2026-00412", "يوسف عبد الرحمن الشمري", "42 / ذكر", "2024/05/12", "14", "نتائج حرجة", "red"],
                ["LAB-2026-00411", "فاطمة القحطاني", "29 / أنثى", "2024/05/10", "03", "مستقر", "green"],
                ["LAB-2026-00398", "محمد خالد الزهراني", "65 / ذكر", "2024/04/28", "22", "قيد المعالجة", "orange"],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-[0.9fr_1.1fr_0.8fr_0.8fr_0.8fr_0.75fr] gap-4 px-6 py-5 text-sm hover:bg-muted/50">
                  <span className="font-mono font-bold text-primary">{row[0]}</span>
                  <span className="font-semibold">{row[1]}</span>
                  <span>{row[2]}</span>
                  <span className="font-mono">{row[3]}</span>
                  <span className="font-mono">{row[4]}</span>
                  <StatusPill tone={row[6] as "red" | "green" | "orange"}>{row[5]}</StatusPill>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppFrame>
  );
}

function TestCatalogScreen() {
  return (
    <AppFrame brand="Clinical Ops" profile="Clinical Directory" sideTitle="Medical Test Catalog">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Medical Test Catalog</h1>
          <p className="mt-2 text-sm text-muted-foreground">Directory of available laboratory analyses and clinical panels</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {["Microbiology", "Immunology", "Oncology", "Hormones", "Biochemistry", "Hematology", "All Categories"].map((cat, index) => (
            <Button key={cat} variant={index === 6 ? "default" : "secondary"}>{cat}</Button>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.42fr_1fr]">
          <Card>
            <CardContent className="space-y-4 p-5">
              <StatusPill tone="orange">Hormones / Diabetes</StatusPill>
              <h2 className="text-3xl font-extrabold">HbA1c</h2>
              <p className="text-lg font-bold text-primary">السكر التراكمي</p>
              <div className="grid gap-3 text-sm">
                <MiniData title="Code" value="DIA-002" />
                <MiniData title="TAT" value="Next Day" />
                <MiniData title="Sample" value="Serum" />
              </div>
              <p className="font-mono text-3xl font-extrabold text-primary">EGP 185.00</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="rounded-[28px] bg-muted/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <StatusPill tone="blue">HEMATOLOGY</StatusPill>
                    <h2 className="mt-3 text-3xl font-extrabold">Complete Blood Count (CBC)</h2>
                    <p className="mt-1 text-lg font-bold text-primary">صورة دم كاملة</p>
                  </div>
                  <Button size="icon">
                    <FileText className="size-4" />
                  </Button>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-4 text-sm">
                  <MiniData title="Price (Public)" value="EGP 220.00" />
                  <MiniData title="Pricing (Internal)" value="EGP 150.00" />
                  <MiniData title="Turnaround Time" value="4 - 6 Hours" />
                  <MiniData title="Sample Type" value="EDTA Whole Blood" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-white">
                <div className="grid grid-cols-[0.75fr_0.8fr_0.8fr_0.9fr_0.9fr_1fr] gap-4 border-b border-border/60 px-6 py-4 text-sm font-bold text-slate-500">
                  <span>Actions</span>
                  <span>Status</span>
                  <span>TAT</span>
                  <span>Reference</span>
                  <span>Specimen</span>
                  <span>Test Name</span>
                </div>
                {[
                  ["عرض", "ACTIVE", "Hours 2", "70 - 105 mg/dL", "Fluoride Plasma", "Glucose (Fasting)"],
                  ["عرض", "ACTIVE", "Hours 3", "0.7 - 1.3 mg/dL", "Serum/Urine", "Creatinine"],
                  ["عرض", "ACTIVE", "Hours 4", "Up to 41 U/L", "Serum", "ALT (SGPT)"],
                ].map((row) => (
                  <div key={row[5]} className="grid grid-cols-[0.75fr_0.8fr_0.8fr_0.9fr_0.9fr_1fr] gap-4 px-6 py-5 text-sm hover:bg-muted/50">
                    <span>{row[0]}</span>
                    <StatusPill tone="green">{row[1]}</StatusPill>
                    <span>{row[2]}</span>
                    <span className="font-mono">{row[3]}</span>
                    <span>{row[4]}</span>
                    <span className="font-semibold">{row[5]}</span>
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

function InventoryScreen() {
  return (
    <AppFrame brand="LIMS Clinical" profile="Core LIMS" sideTitle="إدارة المخزون">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">إدارة المخزون والكواشف</h1>
            <p className="mt-2 text-sm text-muted-foreground">مراقبة توفر المستلزمات الطبية والامتثال لمعيار ISO 15189</p>
          </div>
          <div className="flex gap-3">
            <Button>إضافة مادة جديدة</Button>
            <Button variant="secondary">طلب داخلي</Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <MetricTile title="دقة تتبع الدفعات" value="94%" />
          <MetricTile title="إجمالي قيمة المخزون" value="42,500" unit="USD" />
          <MetricTile title="ينتهي صلاحيتها قريبًا" value="08" />
          <MetricTile title="مواد منخفضة المخزون" value="12" danger />
        </div>

        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">سجل المخزون والتتبع</h2>
              <Button variant="secondary" size="icon">
                <SlidersHorizontal className="size-4" />
              </Button>
            </div>
            <div className="overflow-hidden rounded-[28px] bg-white">
              <div className="grid grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr_0.85fr_0.75fr] gap-4 border-b border-border/60 px-6 py-4 text-sm font-bold text-slate-500">
                <span>اسم المادة</span>
                <span>رقم الكتالوج</span>
                <span>LOT</span>
                <span>تاريخ الانتهاء</span>
                <span>المخزون الحالي</span>
                <span>الحالة</span>
              </div>
              {[
                ["Glucose Oxidase Reagent", "CAT-98231-A", "LOT-772901", "2025-08-12", "Kits 45", "مستقر", "green"],
                ["EDTA Tubes (K2) 4ml", "CAT-11822-B", "LOT-998122", "2024-05-20", "Boxes 8", "منخفض", "orange"],
                ["Lipid Panel Controls", "CAT-44501-L", "LOT-001293", "2024-03-01", "Vials 12", "منتهي", "red"],
              ].map((row) => (
                <div key={row[1]} className="grid grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr_0.85fr_0.75fr] gap-4 px-6 py-5 text-sm hover:bg-muted/50">
                  <span className="font-semibold">{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                  <span className="font-mono">{row[3]}</span>
                  <span>{row[4]}</span>
                  <StatusPill tone={row[6] as "green" | "orange" | "red"}>{row[5]}</StatusPill>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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

function FileRow({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3">
      <div>
        <p className="font-bold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <FileText className="size-4 text-primary" />
    </div>
  );
}

function VoteBar({
  label,
  value,
  tone = "teal",
}: {
  label: string;
  value: number;
  tone?: "teal" | "amber";
}) {
  return (
    <div className="rounded-2xl bg-muted/60 p-4">
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span>{label}</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white">
        <div
          className={`h-full rounded-full ${tone === "amber" ? "bg-amber-500" : "bg-primary"}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function AnnotationCard({
  title,
  text,
  reverse,
}: {
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-4 ${reverse ? "bg-white/90" : "bg-[#f8faf7]/92"}`}>
      <p className="text-xs font-bold text-primary">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function ChatBubble({
  author,
  text,
  mine,
}: {
  author: string;
  text: string;
  mine?: boolean;
}) {
  return (
    <div className={`rounded-[24px] p-4 ${mine ? "bg-primary text-white" : "bg-muted/60 text-slate-700"}`}>
      <p className={`text-xs font-bold ${mine ? "text-white/80" : "text-slate-500"}`}>{author}</p>
      <p className="mt-2 text-sm leading-7">{text}</p>
    </div>
  );
}

function ImagePanel({
  label,
  variant,
}: {
  label: string;
  variant: "left" | "right";
}) {
  return (
    <Card className="overflow-hidden bg-[#121617] text-white">
      <CardContent className="p-4">
        <div className="mb-4 inline-flex rounded-full bg-[#183a38] px-3 py-1 text-xs font-bold text-teal-200">
          {label}
        </div>
        <div
          className={`relative min-h-[610px] rounded-[28px] ${
            variant === "left"
              ? "bg-[radial-gradient(circle_at_40%_45%,#ecead2_0,#f7f5df_21%,#8c2db0_22%,#76218f_38%,#f6f4e2_40%,#f8f7eb_58%,#6b1f7b_60%,#36154a_100%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,#a12aa8_0,#f7dec3_19%,#c3bfd5_23%,#f4d2b8_29%,#932ea2_36%,#f5eed8_40%,#cad0d8_48%,#f0d7bd_62%,#231730_100%)]"
          }`}
        >
          {variant === "left" ? (
            <div className="absolute left-[38%] top-[42%] rounded-xl bg-[#ffe5ea] px-3 py-2 text-xs font-bold text-rose-600 ambient-shadow">
              Anomalous Cluster 04
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

function SliderRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span className="font-mono text-slate-500">{value}%</span>
        <span>{label}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white">
        <div className="relative h-full rounded-full bg-primary/25">
          <div className="absolute right-[30%] top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary" />
          <div className="h-full rounded-full bg-primary/40" style={{ width: `${value}%` }} />
        </div>
      </div>
    </div>
  );
}

function FeatureBox({
  title,
  badge,
  text,
  subtle,
}: {
  title: string;
  badge: string;
  text: string;
  subtle?: boolean;
}) {
  return (
    <div className={`rounded-[24px] p-4 ${subtle ? "bg-muted/60" : "bg-[#e7f3f1]"}`}>
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${subtle ? "bg-white text-primary" : "bg-primary text-white"}`}>
          {badge}
        </span>
        <span className="font-bold text-primary">{title}</span>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function SelectionCard({
  title,
  subtitle,
  active,
  danger,
}: {
  title: string;
  subtitle: string;
  active?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-[24px] border p-5 text-right transition ${
        active
          ? "border-primary bg-[#f3fbf9]"
          : danger
            ? "border-rose-200 bg-[#fff5f3]"
            : "border-border bg-white hover:bg-muted/40"
      }`}
    >
      <p className="text-lg font-extrabold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{subtitle}</p>
    </button>
  );
}

function InstrumentCard({
  title,
  section,
  status,
  metricA,
  metricB,
  warning,
}: {
  title: string;
  section: string;
  status: string;
  metricA: string;
  metricB: string;
  warning?: boolean;
}) {
  return (
    <Card className={warning ? "bg-[#fff8e8]" : "bg-white/90"}>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <StatusPill tone={warning ? "orange" : "green"}>{status}</StatusPill>
          <span className="text-xs font-bold text-slate-400">{section}</span>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">#A204</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <MiniData title="Metric A" value={metricA} />
          <MiniData title="Metric B" value={metricB} />
        </div>
      </CardContent>
    </Card>
  );
}

function QcChart() {
  const points = [46, 52, 40, 48, 61, 33, 22, 45, 51, 43, 36, 12, 30];
  const width = 760;
  const height = 280;
  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - point * 3.2;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-[28px] bg-white p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[320px] w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <line
            key={index}
            x1="0"
            x2={width}
            y1={(height / 8) * index}
            y2={(height / 8) * index}
            stroke="#e6ecef"
            strokeWidth="1"
          />
        ))}
        <path d={path} fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
        {points.map((point, index) => {
          const x = (index / (points.length - 1)) * width;
          const y = height - point * 3.2;
          return <circle key={index} cx={x} cy={y} r={index > 10 ? 5 : 3.5} fill={index > 10 ? "#dc2626" : "#0f766e"} />;
        })}
      </svg>
    </div>
  );
}

function DetailGroup({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <h3 className="text-xl font-extrabold">{title}</h3>
        <div className="space-y-3">
          {items.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl bg-muted/50 px-4 py-3">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="font-semibold text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
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
