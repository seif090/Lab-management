export type DashboardStat = {
  title: string;
  value: string;
  tone: "primary" | "danger" | "neutral";
};

export type OrderRecord = {
  id: string;
  patientName: string;
  doctorName: string;
  testName: string;
  status: string;
  priority: string;
};

export type PatientRecord = {
  id: string;
  name: string;
  age: number;
  gender: string;
  status: string;
  latestVisit: string;
};

export type SpecimenRecord = {
  id: string;
  patientName: string;
  specimenType: string;
  collectedAt: string;
  status: string;
};

export type ResultRecord = {
  id: string;
  patientName: string;
  parameter: string;
  value: string;
  status: string;
};

export const dashboardStats: DashboardStat[] = [
  { title: "الاستيعاب اليومي", value: "84%", tone: "primary" },
  { title: "قيم حرجة تحتاج اعتماد", value: "12", tone: "danger" },
  { title: "طلبات جديدة", value: "28", tone: "neutral" },
  { title: "عينات اليوم", value: "142", tone: "neutral" },
];

export const orders: OrderRecord[] = [
  {
    id: "ORD-2026-00412",
    patientName: "أحمد محمد آن",
    doctorName: "د. سارة الفهد",
    testName: "CBC + HbA1c",
    status: "قيد التنفيذ",
    priority: "STAT",
  },
  {
    id: "ORD-2026-00413",
    patientName: "فاطمة الزهراء علي",
    doctorName: "Dr. Robert Chen",
    testName: "LFT",
    status: "بانتظار العينة",
    priority: "عادي",
  },
  {
    id: "ORD-2026-00414",
    patientName: "يوسف إبراهيم خليل",
    doctorName: "Emergency Unit",
    testName: "Troponin I",
    status: "جاهز للاعتماد",
    priority: "مستعجل",
  },
];

export const patients: PatientRecord[] = [
  {
    id: "PAT-88231",
    name: "يوسف عبدالرحمن الشمري",
    age: 42,
    gender: "ذكر",
    status: "نتائج حرجة",
    latestVisit: "2026-04-08",
  },
  {
    id: "PAT-88120",
    name: "فاطمة القحطاني",
    age: 29,
    gender: "أنثى",
    status: "مستقر",
    latestVisit: "2026-04-07",
  },
  {
    id: "PAT-80144",
    name: "محمد خالد الزهراني",
    age: 65,
    gender: "ذكر",
    status: "قيد المعالجة",
    latestVisit: "2026-04-06",
  },
];

export const specimens: SpecimenRecord[] = [
  {
    id: "LAB-2026-00123",
    patientName: "أحمد سمير علي",
    specimenType: "Blood (EDTA)",
    collectedAt: "14:30",
    status: "قيد التحليل",
  },
  {
    id: "LAB-2026-00124",
    patientName: "منى ناصر الموسوي",
    specimenType: "Serum",
    collectedAt: "16:00",
    status: "بانتظار التأكيد",
  },
  {
    id: "LAB-2026-00125",
    patientName: "يوسف إبراهيم خليل",
    specimenType: "Plasma",
    collectedAt: "16:20",
    status: "مكتمل",
  },
];

export const results: ResultRecord[] = [
  {
    id: "RES-001",
    patientName: "سارة محمود العبادي",
    parameter: "Hemoglobin",
    value: "12.4 g/dL",
    status: "معتمد",
  },
  {
    id: "RES-002",
    patientName: "ياسين إبراهيم الخليل",
    parameter: "Troponin I",
    value: "42.8 ng/L",
    status: "قيمة حرجة",
  },
  {
    id: "RES-003",
    patientName: "فاطمة نصر الزهراني",
    parameter: "Glucose Random",
    value: "148 mg/dL",
    status: "بانتظار الاعتماد",
  },
];

export const dashboardPayload = {
  stats: dashboardStats,
  orders,
  patients,
  specimens,
  results,
};
