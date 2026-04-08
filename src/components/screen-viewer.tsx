import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Layers3, PanelRightOpen } from "lucide-react";
import { hasSemanticScreen, SemanticScreen } from "@/components/semantic-screens";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { screens, type Screen } from "@/lib/screens";

export function ScreenViewer({ screen }: { screen: Screen }) {
  const currentIndex = screens.findIndex((entry) => entry.slug === screen.slug);
  const previous = currentIndex > 0 ? screens[currentIndex - 1] : undefined;
  const next = currentIndex < screens.length - 1 ? screens[currentIndex + 1] : undefined;

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
        <Card className="overflow-hidden bg-card/90">
          <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  <Layers3 className="size-3.5" />
                  {screen.category}
                </div>
                <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">{screen.title}</h1>
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {screen.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/">
                  <Button variant="secondary">
                    <Home className="size-4" />
                    لوحة التحكم
                  </Button>
                </Link>
                <Link href="/modules">
                  <Button variant="secondary">
                    <PanelRightOpen className="size-4" />
                    مركز الوحدات
                  </Button>
                </Link>
                {previous ? (
                  <Link href={`/screens/${previous.slug}`}>
                    <Button variant="ghost">
                      <ArrowRight className="size-4" />
                      الوحدة السابقة
                    </Button>
                  </Link>
                ) : null}
                {next ? (
                  <Link href={`/screens/${next.slug}`}>
                    <Button>
                      الوحدة التالية
                      <ArrowLeft className="size-4" />
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>

            {hasSemanticScreen(screen.slug) ? (
              <SemanticScreen screen={screen} />
            ) : (
              <div className="overflow-hidden rounded-[28px] bg-slate-100">
                <div className="relative w-full">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={1600}
                    height={1200}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
