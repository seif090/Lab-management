import { Button } from "@/components/ui/button";
import { ChartBars, DashboardHeading, HeroPanel, MetricGrid, SectionCard, SimpleTable, StatusPill, AppFrame } from "@/components/screens/shared";
import { mockData } from "@/services/mock-data";

export function PatientPortalDashboardScreen() {
  return (
    <AppFrame brand="Clinical Nexus" profile="أحمد محمد العتيبي" sideTitle="Portal Overview">
      <div className="space-y-6">
        <HeroPanel title="General Consultation - Dr. Sarah Khalid" subtitle="Tomorrow at 10:30 AM - Lab Unit 4">
          <Button variant="secondary">View Details</Button>
        </HeroPanel>
        <div className="grid gap-5 xl:grid-cols-[0.46fr_1fr]">
          <SectionCard title="Health Trends">
            <ChartBars values={[42, 63, 48, 52, 39]} highlightIndex={1} />
          </SectionCard>
          <SectionCard title="Recent Results">
            <SimpleTable
              columns={["اسم الفحص", "التاريخ", "الحالة"]}
              rows={mockData.portal.results.map((row) => [
                row[0],
                row[1],
                <StatusPill key={row[2]} tone={row[2].includes("المعالجة") ? "orange" : "green"}>{row[2]}</StatusPill>,
              ])}
            />
          </SectionCard>
        </div>
      </div>
    </AppFrame>
  );
}

export function NotificationsCenterScreen() {
  return (
    <AppFrame brand="Clinical Nexus" profile="د. أحمد علي" sideTitle="Notifications">
      <div className="space-y-6">
        <DashboardHeading title="Notifications Center" description="إدارة رسائل التنبيه والتسليم للمرضى والأطباء" />
        <MetricGrid
          items={[
            { title: "Failed SMS Alert", value: "12", tone: "danger" },
            { title: "Delivery Success Rate", value: "98.5%", tone: "primary" },
            { title: "Today's Volume", value: "1,482", tone: "neutral" },
            { title: "Admin View", value: "ON", tone: "neutral" },
          ]}
        />
        <SectionCard title="سجل التنبيهات" actions={<Button>Send New Alert</Button>}>
          <SimpleTable
            columns={["الوقت", "الحالة", "المحتوى", "النوع", "المستلم"]}
            rows={mockData.portal.notifications.map((row) => [
              <span className="font-mono" key={row[0]}>{row[0]}</span>,
              <StatusPill key={row[1]} tone={row[1] === "Delivered" ? "green" : row[1] === "Failed" ? "red" : "blue"}>{row[1]}</StatusPill>,
              row[2],
              row[3],
              row[4],
            ])}
          />
        </SectionCard>
      </div>
    </AppFrame>
  );
}
