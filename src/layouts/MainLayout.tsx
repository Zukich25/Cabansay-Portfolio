import { Outlet, useLocation } from "react-router";
import { Header } from "@/components/common/header";
import { cn } from "@/lib/cn";

export function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-page text-fg flex flex-col transition-colors duration-300">
      <Header />
      <main className={cn("flex-1", isHome && "overflow-hidden")}>
        <div key={pathname} className={cn(!isHome && "page-enter")}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
