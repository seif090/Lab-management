import type { Screen } from "@/lib/screens";
import {
  MainLayoutScreen,
  PatientPortalLoginScreen,
  QuickActionsScreen,
  SplashScreen,
} from "@/components/screens/core";
import {
  AiDiagnosticHubScreen,
  ClinicalCollaborationScreen,
  ClinicalResearchScreen,
  ExomeNgsScreen,
  PharmacogenomicsScreen,
  QualityControlScreen,
  ResultsApprovalScreen,
  ResultsEntryScreen,
  SampleRejectionScreen,
  TelePathologyScreen,
} from "@/components/screens/diagnostics";
import {
  AuditLogScreen,
  ComplianceTrainingScreen,
  DataGovernanceScreen,
  GlobalHieScreen,
  IotMaintenanceScreen,
  PredictiveAnalyticsScreen,
  PublicHealthScreen,
  RbacMatrixScreen,
  SystemSettingsScreen,
} from "@/components/screens/governance";
import {
  BillingPaymentsScreen,
  EnhancedDashboardScreen,
  InventoryScreen,
  NewOrderFormScreen,
  OrdersManagementScreen,
  PatientProfileScreen,
  PatientsListScreen,
  ReferringDoctorsScreen,
  SampleRegistrationScreen,
  TestCatalogScreen,
} from "@/components/screens/operations";
import {
  NotificationsCenterScreen,
  PatientPortalDashboardScreen,
} from "@/components/screens/portal";

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
  "billing_payments",
  "referring_doctors",
  "patient_portal_dashboard",
  "notifications_center",
  "global_hie",
  "pharmacogenomics",
  "clinical_research",
  "tele_pathology",
  "exome_ngs",
  "data_governance",
  "detailed_rbac_matrix",
  "enhanced_audit_log_rbac_tracking",
  "enhanced_system_settings",
  "compliance_training",
  "iot_maintenance",
  "predictive_analytics",
  "public_health_surveillance",
  "quick_actions",
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
    case "quick_actions":
      return <QuickActionsScreen />;
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
    case "billing_payments":
      return <BillingPaymentsScreen />;
    case "referring_doctors":
      return <ReferringDoctorsScreen />;
    case "patient_portal_dashboard":
      return <PatientPortalDashboardScreen />;
    case "notifications_center":
      return <NotificationsCenterScreen />;
    case "global_hie":
      return <GlobalHieScreen />;
    case "pharmacogenomics":
      return <PharmacogenomicsScreen />;
    case "clinical_research":
      return <ClinicalResearchScreen />;
    case "tele_pathology":
      return <TelePathologyScreen />;
    case "exome_ngs":
      return <ExomeNgsScreen />;
    case "data_governance":
      return <DataGovernanceScreen />;
    case "detailed_rbac_matrix":
      return <RbacMatrixScreen />;
    case "enhanced_audit_log_rbac_tracking":
      return <AuditLogScreen />;
    case "enhanced_system_settings":
      return <SystemSettingsScreen />;
    case "compliance_training":
      return <ComplianceTrainingScreen />;
    case "iot_maintenance":
      return <IotMaintenanceScreen />;
    case "predictive_analytics":
      return <PredictiveAnalyticsScreen />;
    case "public_health_surveillance":
      return <PublicHealthScreen />;
    default:
      return null;
  }
}
