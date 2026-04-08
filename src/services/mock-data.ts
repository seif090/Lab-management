export const mockData = {
  mainLayout: {
    metrics: [
      { title: "الاستيعاب اليومي", value: "84%", tone: "primary" },
      { title: "قيم حرجة", value: "12", tone: "danger" },
      { title: "عينات اليوم", value: "142", tone: "neutral" },
      { title: "طلبات جديدة", value: "28", tone: "neutral" },
    ] satisfies Array<{
      title: string;
      value: string;
      tone: "primary" | "danger" | "neutral";
    }>,
    rows: [
      ["LAB-2026-00123", "أحمد سمير علي", "CBC + HbA1c", "14:30", "قيد التحليل"],
      ["LAB-2026-00124", "منى ناصر الموسوي", "Liver Function Test", "16:00", "بانتظار التأكيد"],
      ["LAB-2026-00125", "يوسف إبراهيم خليل", "Troponin I", "16:20", "مكتمل"],
    ],
  },
  operations: {
    orders: [
      ["LAB-2026-00412", "Dr. Sarah Al-Fahad", "أحمد محمد آن", "Centrifuged"],
      ["LAB-2026-00413", "Dr. Robert Chen", "فاطمة الزهراء علي", "Received"],
      ["LAB-2026-00414", "Emergency Unit", "يوسف إبراهيم خليل", "Analyzed"],
    ],
    patients: [
      ["LAB-2026-00412", "يوسف عبد الرحمن الشمري", "42 / ذكر", "2024/05/12", "نتائج حرجة"],
      ["LAB-2026-00411", "فاطمة القحطاني", "29 / أنثى", "2024/05/10", "مستقر"],
      ["LAB-2026-00398", "محمد خالد الزهراني", "65 / ذكر", "2024/04/28", "قيد المعالجة"],
    ],
    inventory: [
      ["Glucose Oxidase Reagent", "CAT-98231-A", "LOT-772901", "2025-08-12", "Kits 45", "مستقر"],
      ["EDTA Tubes (K2) 4ml", "CAT-11822-B", "LOT-998122", "2024-05-20", "Boxes 8", "منخفض"],
      ["Lipid Panel Controls", "CAT-44501-L", "LOT-001293", "2024-03-01", "Vials 12", "منتهي"],
    ],
    billing: [
      ["INV-2026-00482", "عبدالرحمن محمود العمري", "Oct 24 2026", "1,450.00", "مدفوعة"],
      ["INV-2026-00483", "ليلى يوسف خليل", "Oct 24 2026", "820.00", "معلقة"],
      ["INV-2026-00484", "عمر خالد العتيبي", "Oct 23 2026", "2,100.00", "جزئي"],
    ],
    doctors: [
      ["أحمد الشمري", "أمراض القلب", "مستشفى الملك فهد التخصصي", "055-123-4567", "2,480"],
      ["ليلى حسن", "غدد صماء وسكري", "مجمع عيادات النخبة", "050-888-9900", "1,125"],
      ["محمد القحطاني", "الأمراض الباطنية", "مركز الرحى الطبي", "054-333-2211", "842"],
    ],
    tests: [
      ["Glucose (Fasting)", "70 - 105 mg/dL", "Fluoride Plasma", "Hours 2", "ACTIVE"],
      ["Creatinine", "0.7 - 1.3 mg/dL", "Serum/Urine", "Hours 3", "ACTIVE"],
      ["ALT (SGPT)", "Up to 41 U/L", "Serum", "Hours 4", "ACTIVE"],
    ],
  },
  portal: {
    notifications: [
      ["10:24 AM", "Delivered", "تأكيد حجز جاهز الآن، يرجى مراجعة التطبيق.", "SMS", "سارة محمود"],
      ["09:45 AM", "Failed", "تنبيه: قيمة حرجة للمريض خالد إبراهيم.", "Email", "د. أيمن خالد"],
      ["08:30 AM", "Sent", "تذكير بموعدك عند الساعة 20:00.", "SMS", "محمد ياسر"],
    ],
    results: [
      ["Complete Blood Count (CBC)", "Oct 24, 2023", "تم الاعتماد"],
      ["Lipid Profile", "Oct 20, 2023", "تم الاعتماد"],
      ["HbA1c Glycemic Index", "Oct 15, 2023", "قيد المعالجة"],
    ],
  },
  diagnostics: {
    resultEntry: [
      ["Glucose (Fasting)", "Cobas 6000", "5", "70 - 100", "Normal"],
      ["HbA1c", "BioRad D-10", "5", "4.0 - 5.6", "Critical"],
      ["Total Cholesterol", "Cobas 6000", "5", "< 200", "High"],
    ],
    resultApproval: [
      ["Hemoglobin (HGB)", "12.4 g/dL", "12.0 - 15.5", "Verified"],
      ["Troponin I", "42.8 ng/L", "14.0 >", "Verified"],
      ["Glucose (Random)", "148 mg/dL", "70 - 140", "Verified"],
    ],
    collaborationChat: [
      ["Dr. Sarah Chen", "راجعت صور الأشعة، وتبدو الكتلة أكبر قليلًا من المتوقع."],
      ["You", "أركز على الدرجة النووية في المقطع 4B."],
      ["Dr. Marcus Vance", "هل تُظهر صبغة المناعة أي مؤشرات نوعية؟"],
    ],
    variants: [
      ["BRCA1", "c.5266dupC", "Pathogenic"],
      ["TP53", "c.743G>A", "Pathogenic"],
      ["EGFR", "c.2573T>G", "VUS"],
      ["MSH2", "c.1250G>C", "Benign"],
    ],
  },
  governance: {
    accessLogs: [
      ["AUTHORIZED", "192.168.1.104", "Genomics Decryption", "Dr. Sarah Khalil"],
      ["AUTHORIZED", "10.0.4.52", "Patient Record Export", "Dr. Ahmed Mansour"],
      ["DENIED", "45.23.11.201", "API Key Access Attempt", "Unknown User"],
    ],
    auditEvents: [
      ["GRANTED", "Delete on Final Reports", "Senior Pathologist", "John Doe"],
      ["REVOKED", "Export on Financial Data", "Lab Assistant", "John Doe"],
      ["COMPLETED", "Periodic Audit Export", "Audit Export Node", "سارة م."],
    ],
  },
};
