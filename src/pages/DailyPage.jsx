import { Daily } from "@/components/daily";
import { NavBar } from "@/components/navBar";

export function DailyPage() {
  return (
    <div className="flex h-screen flex-col-reverse lg:flex-row">
      <NavBar />
      <Daily />
    </div>
  );
}

// text-zinc-200/90
