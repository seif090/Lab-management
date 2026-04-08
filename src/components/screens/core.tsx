import { FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockData } from "@/services/mock-data";
import {
  AppFrame,
  DashboardHeading,
  FeatureNote,
  HeroPanel,
  ImagePlaceholder,
  MetricGrid,
  PortalField,
  SectionCard,
  SimpleTable,
  StatusPill,
} from "@/components/screens/shared";

export function SplashScreen() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.07),transparent_28%),#f8fbfc] px-6 py-16 sm:px-12 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d9e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
      <div className="relative mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-[26px] teal-gradient text-white ambient-shadow">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-7 w-7 rounded-full border-2 border-current" />
            <div className="-mt-1 h-4 w-1.5 rounded-full bg-current" />
            <div className="mt-1 h-1.5 w-9 rounded-full bg-current" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">Clinical Nexus</h1>
        <p className="mt-3 text-sm font-semibold tracking-[0.28em] text-muted-foreground uppercase">Advanced LIMS Ecosystem</p>
        <p className="mt-8 text-xl font-semibold text-muted-foreground">جاري تأمين الاتصال...</p>
        <div className="mt-8 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[68%] rounded-full teal-gradient" />
        </div>
      </div>
    </div>
  );
}

export function PatientPortalLoginScreen() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#f8fbfc] px-6 py-12 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d9e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-70" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-primary">Clinical Nexus</h1>
          <p className="mt-3 text-lg text-muted-foreground">بوابة وصول المرضى للنتائج المخبرية</p>
        </div>
        <Card className="w-full max-w-xl bg-white/95">
          <CardContent className="space-y-5 p-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-foreground">تسجيل الدخول</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">يرجى إدخال بيانات العينة الخاصة بك لعرض النتائج</p>
            </div>
            <PortalField label="الرقم القومي" icon={<User className="size-4" />} />
            <PortalField label="باركود العينة/الطلب" icon={<FileText className="size-4" />} placeholder="LAB-12345678" />
            <Button className="h-14 w-full text-base">عرض النتائج</Button>
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

export function MainLayoutScreen() {
  const data = mockData.mainLayout;
  return (
    <AppFrame brand="LIMS Precision" profile="د. أحمد خالد" sideTitle="نظام المختبر الطبي">
      <div className="space-y-6">
        <DashboardHeading title="الواجهة الرئيسية" description="لوحة الإجراءات السريعة والملخص التشغيلي" />
        <MetricGrid items={data.metrics} />
        <SectionCard title="آخر العينات المستلمة">
          <SimpleTable
            columns={["رقم العينة", "اسم المريض", "نوع الفحص", "الوقت المتوقع", "الحالة"]}
            rows={data.rows.map((row) => [
              <span className="font-mono font-bold text-primary" key={row[0]}>{row[0]}</span>,
              row[1],
              row[2],
              <span className="font-mono" key={row[3]}>{row[3]}</span>,
              <StatusPill key={row[4]} tone={row[4] === "قيد التحليل" ? "blue" : row[4] === "مكتمل" ? "green" : "orange"}>{row[4]}</StatusPill>,
            ])}
          />
        </SectionCard>
      </div>
    </AppFrame>
  );
}

export function QuickActionsScreen() {
  return (
    <AppFrame brand="LIMS Precision" profile="د. أحمد خالد" sideTitle="الإجراءات السريعة">
      <div className="space-y-6">
        <DashboardHeading title="الإجراءات السريعة" description="وصول مباشر لعمليات المختبر الأكثر استخدامًا" />
        <div className="grid gap-5 md:grid-cols-5">
          {["إدخال نتائج مجمع", "فحص الجودة (QC)", "طباعة تقرير", "إنشاء طلب جديد", "استلام عينة"].map((item) => (
            <Card key={item}>
              <CardContent className="flex min-h-36 flex-col items-center justify-center gap-4 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
                  <User className="size-6" />
                </div>
                <p className="font-bold">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-5 xl:grid-cols-[0.34fr_1fr]">
          <HeroPanel title="طاقة المختبر الاستيعابية" subtitle="أجهزة التحليل الكيميائي والدم">
            <ImagePlaceholder dark />
          </HeroPanel>
          <SectionCard title="آخر العينات المستلمة">
            <SimpleTable
              columns={["رقم العينة", "اسم المريض", "نوع الفحص", "الحالة"]}
              rows={mockData.mainLayout.rows.map((row) => [
                <span className="font-mono" key={row[0]}>{row[0]}</span>,
                row[1],
                row[2],
                <StatusPill key={row[4]} tone={row[4] === "قيد التحليل" ? "blue" : row[4] === "مكتمل" ? "green" : "orange"}>{row[4]}</StatusPill>,
              ])}
            />
          </SectionCard>
        </div>
      </div>
    </AppFrame>
  );
}
