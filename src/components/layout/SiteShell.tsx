import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Navbar />
      <div className="site-shell flex min-h-screen min-w-0 flex-col overflow-x-clip bg-brand-warm">
        <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </div>
    </>
  );
}
