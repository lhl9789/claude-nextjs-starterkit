import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold">StarterKit</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link
              href="/"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
