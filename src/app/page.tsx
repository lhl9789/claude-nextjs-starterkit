import Link from "next/link";
import { ArrowRight, Zap, Palette, Shield, Gauge, Code2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Next.js 15 App Router",
    description:
      "최신 Next.js 15의 App Router와 React Server Components를 활용한 고성능 웹 애플리케이션 구조.",
    badge: "v15",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description:
      "CSS-first 설정 방식의 Tailwind v4. tailwind.config 파일 없이 @import 한 줄로 전체 설정 완료.",
    badge: "v4",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description:
      "풀 타입 안전성과 최신 TypeScript strict 설정으로 안정적인 개발 경험과 강력한 IDE 지원.",
    badge: "Strict",
  },
  {
    icon: Gauge,
    title: "shadcn/ui",
    description:
      "접근성을 고려한 Radix UI 기반의 shadcn/ui 컴포넌트. 복사-붙여넣기로 완전히 소유 가능.",
    badge: "New York",
  },
  {
    icon: Code2,
    title: "Dark Mode",
    description:
      "next-themes를 사용한 시스템 다크모드 감지 및 수동 전환 지원. CSS 변수 기반 테마 시스템.",
    badge: "next-themes",
  },
  {
    icon: Globe,
    title: "Lucide Icons",
    description:
      "1,000개 이상의 아이콘을 제공하는 lucide-react로 일관된 아이콘 시스템 구성.",
    badge: "1000+",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Badge variant="secondary" className="text-sm">
            Next.js 15 + TailwindCSS v4 + shadcn/ui
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Modern Web Development{" "}
            <span className="text-primary">Starter Kit</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Next.js v15, TailwindCSS v4, shadcn/ui, TypeScript로 구성된
            프로덕션 레디 스타터킷. 복잡한 설정 없이 바로 개발을 시작하세요.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/docs">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                GitHub에서 보기
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Next.js 15.3</span>
            <span>·</span>
            <span>TailwindCSS 4.1</span>
            <span>·</span>
            <span>React 19</span>
            <span>·</span>
            <span>TypeScript 5</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            포함된 기능들
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            현대적인 웹 개발에 필요한 모든 것이 사전 설정되어 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="max-w-xl text-muted-foreground">
              이 스타터킷을 포크하거나 클론해서 나만의 프로젝트를 시작하세요.
            </p>
            <div className="rounded-lg border bg-background px-6 py-3 font-mono text-sm">
              npx create-next-app@latest --example claude-nextjs-starterkit
            </div>
            <Button size="lg" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                GitHub에서 클론하기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
