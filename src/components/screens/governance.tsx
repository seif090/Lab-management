import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockData } from "@/services/mock-data";
import {
  AppFrame,
  ChartBars,
  DashboardHeading,
  FileRow,
  HeroPanel,
  ImagePlaceholder,
  MetricGrid,
  MiniData,
  RingScore,
  SectionCard,
  SelectionCard,
  SimpleTable,
  StatusPill,
  VoteBar,
} from "@/components/screens/shared";

export function GlobalHieScreen() {
  return (
    <AppFrame brand="Precision LIMS" profile="Network Infrastructure" sideTitle="Global HIE">
      <div className="space-y-6"><DashboardHeading title="Global HIE Interoperability" eyebrow="NETWORK INFRASTRUCTURE" /><div className="grid gap-5 xl:grid-cols-[0.34fr_1fr]"><SectionCard title="FHIR Validation"><VoteBar label="Patient Resources" value={100} /><VoteBar label="Observation Resources" value={99} /><VoteBar label="Encounter Resources" value={100} /></SectionCard><HeroPanel title="Active Data Nodes" subtitle="WHO HQ, Geneva | CDC, Atlanta | MoH, Riyadh"><ImagePlaceholder dark /></HeroPanel></div></div>
    </AppFrame>
  );
}

export function DataGovernanceScreen() {
  return (
    <AppFrame brand="LIMS Curator" profile="Governance Suite" sideTitle="Audit Log">
      <div className="space-y-6"><MetricGrid items={[{ title: "HIPAA Compliant", value: "100%", tone: "primary" }, { title: "AES-256 Bit", value: "Secure" }, { title: "Audit Score", value: "94%" }, { title: "GDPR", value: "Active" }]} /><SectionCard title="حوكمة البيانات والامتثال"><SimpleTable columns={["Status", "IP Address", "Action", "User"]} rows={mockData.governance.accessLogs.map((row) => [<StatusPill key={row[0]} tone={row[0] === "DENIED" ? "red" : "green"}>{row[0]}</StatusPill>, <span className="font-mono" key={row[1]}>{row[1]}</span>, row[2], row[3]])} /></SectionCard></div>
    </AppFrame>
  );
}

export function RbacMatrixScreen() {
  return (
    <AppFrame brand="Admin Console" profile="ISO 15189 Security" sideTitle="إدارة المستخدمين">
      <div className="grid gap-6 xl:grid-cols-[0.34fr_1fr]"><SectionCard title="آخر محاولات الدخول"><div className="space-y-3">{["فشل محاولة دخول - ليلى عادل", "دخول ناجح - خالد الفهيد", "دخول ناجح - فهد الشمري"].map((item) => <div key={item} className="rounded-2xl bg-muted/50 px-4 py-3 text-sm">{item}</div>)}</div></SectionCard><SectionCard title="إدارة المستخدمين والصلاحيات"><SimpleTable columns={["الموظف", "الدور", "الحالة", "آخر دخول"]} rows={[["أ. أحمد خالد", "إداري / الباثولوجيا", <StatusPill key="1" tone="green">نشط</StatusPill>, "2023-10-24 08:30"], ["ف. سارة محمد", "فني مختبر أول / الكيمياء الحيوية", <StatusPill key="2" tone="green">نشط</StatusPill>, "2023-10-07 15:24"], ["م. فهد الشمري", "إداري أنظمة", <StatusPill key="3" tone="orange">معطل</StatusPill>, "2023-10-14 22:20"]]} /></SectionCard></div>
    </AppFrame>
  );
}

export function AuditLogScreen() {
  return (
    <AppFrame brand="Clinical Nexus" profile="Audit Node" sideTitle="RBAC Audit">
      <div className="space-y-6"><DashboardHeading title="سجل التدقيق وصلاحيات RBAC" eyebrow="ISO 15189 / HIPAA COMPLIANT AUDIT NODE" actions={<><Button>تصدير سجلات مشفرة</Button><Button variant="secondary">عرض مصفوفة RBAC</Button></>} /><SectionCard title="التدقيق"><div className="grid gap-4 md:grid-cols-4"><Input placeholder="الفترة الزمنية" className="font-mono" /><Input placeholder="نوع التحقق" /><Input placeholder="الدور الوظيفي" /><Input placeholder="البحث عن Hash" className="font-mono" /></div><div className="mt-5"><SimpleTable columns={["Status", "Action Detail", "Resource", "Admin User"]} rows={mockData.governance.auditEvents.map((row) => [<StatusPill key={row[0]} tone={row[0] === "GRANTED" ? "green" : row[0] === "REVOKED" ? "red" : "blue"}>{row[0]}</StatusPill>, row[1], row[2], row[3]])} /></div></SectionCard></div>
    </AppFrame>
  );
}

export function SystemSettingsScreen() {
  return (
    <AppFrame brand="LIMS المتطور" profile="الإعدادات" sideTitle="System Settings">
      <div className="grid gap-6 xl:grid-cols-[0.34fr_1fr]"><div className="space-y-5"><SectionCard title="اللغة والمنطقة"><div className="flex gap-3"><Button variant="secondary">English</Button><Button>العربية</Button></div><MiniData title="التوقيت المحلي" value="adh, Saudi Arabia (GMT+03:00)" /></SectionCard><HeroPanel title="النسخ الاحتياطي السحابي" subtitle="آخر مزامنة 2023-11-20" /></div><SectionCard title="الإعدادات العامة والهوية"><div className="grid gap-4 md:grid-cols-2"><Input placeholder="اسم المختبر" /><Input placeholder="Lab Name (Latin)" /></div><SectionCard title="شعار النظام"><Button>تغيير الشعار</Button></SectionCard><div className="space-y-3"><MiniData title="Glucose (Fasting)" value="70 - 100 mg/dL" /><MiniData title="Hemoglobin (HGB)" value="13.5 - 17.5 g/dL" /><MiniData title="TSH (Thyroid)" value="0.4 - 4.2 uIU/mL" /></div></SectionCard></div>
    </AppFrame>
  );
}

export function ComplianceTrainingScreen() {
  return (
    <AppFrame brand="Clinical Curator LIMS" profile="Core Laboratory" sideTitle="Compliance">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.38fr]"><div className="space-y-5"><MetricGrid items={[{ title: "Active Staff", value: "142/145", tone: "primary" }, { title: "Certifications", value: "92%" }, { title: "Next Audit", value: "14 Days" }, { title: "SOP Library", value: "2" }]} /><div className="grid gap-5 md:grid-cols-2"><SelectionCard title="Hematology Safety Protocols" subtitle="Refresher course on chemical handling." active /><SelectionCard title="Data Integrity & Privacy" subtitle="Best practices for patient PII management." /></div><SectionCard title="Digital SOP Library"><FileRow title="Blood Sample Phlebotomy v4.2" subtitle="Updated Oct 2023 | 12 Staff Read" /><FileRow title="Centrifuge Maintenance Protocols" subtitle="Updated Dec 2023 | 5 Staff Read" /></SectionCard></div><div className="space-y-5"><HeroPanel title="Audit Readiness Score"><RingScore value="88%" /></HeroPanel><SectionCard title="Compliance Checklist"><div className="space-y-3">{["Instrument Calibration Logs", "Staff Competency Assessment", "Environmental Control Records"].map((item) => <div key={item} className="rounded-2xl bg-muted/50 px-4 py-3 text-sm">{item}</div>)}</div></SectionCard></div></div>
    </AppFrame>
  );
}

export function IotMaintenanceScreen() {
  return (
    <AppFrame brand="LIMS Curator" profile="Dr. Clinical Curator" sideTitle="Predictive IoT">
      <div className="space-y-6"><DashboardHeading title="الصيانة الاستباقية للأنظمة" actions={<Button>Schedule Service</Button>} /><div className="grid gap-5 xl:grid-cols-[1fr_0.44fr]"><HeroPanel title="Real-time Sensor Network"><ImagePlaceholder /></HeroPanel><SectionCard title="Roche-COB-01"><SelectionCard title="Status: Maintenance Due" subtitle="Vacuum Pressure 4.8 / Thermal Stability 37.2°C" danger /></SectionCard></div></div>
    </AppFrame>
  );
}

export function PredictiveAnalyticsScreen() {
  return (
    <AppFrame brand="Clinical Curator LIMS" profile="Core Laboratory" sideTitle="Analytics">
      <div className="space-y-6"><DashboardHeading title="Predictive Analytics Hub" description="AI-driven foresight for laboratory resource optimization" /><div className="grid gap-5 xl:grid-cols-[0.3fr_1fr]"><SectionCard title="AI Recommendations"><SelectionCard title="Hemolysis Rate Spike" subtitle="Pre-analytical error predicted to rise in 48h." danger /><SelectionCard title="Staffing Recommendation" subtitle="Increase Chemistry Lab staffing by 1.5 FTE." /></SectionCard><SectionCard title="Test Volume Forecasting"><ChartBars values={[64, 72, 81, 93, 84, 88, 76, 58, 63, 44, 49, 41]} highlightIndex={4} /></SectionCard></div></div>
    </AppFrame>
  );
}

export function PublicHealthScreen() {
  return (
    <AppFrame brand="Clinical Nexus" profile="Dr. Aris" sideTitle="Public Health">
      <div className="space-y-6"><div className="grid gap-5 xl:grid-cols-[0.34fr_1fr]"><HeroPanel title="AI Forecast (Next 7 Days)" subtitle="Predicted uptick in localized RSV cases."><p className="font-mono text-6xl font-extrabold text-white">12.4%+</p></HeroPanel><HeroPanel title="ACTIVE MONITORING" subtitle="Influenza & RSV Heatmap"><ImagePlaceholder /></HeroPanel></div><SectionCard title="Reporting Status Board"><SimpleTable columns={["Pathogen", "Status", "Criticality"]} rows={[["Influenza A (H1N1)", "SENT & ACKNOWLEDGED", "Moderate"], ["Neisseria meningitidis", "ACTION REQUIRED", "Extreme"], ["Salmonella enterica", "PROCESSING", "Low"]]} /></SectionCard></div>
    </AppFrame>
  );
}
