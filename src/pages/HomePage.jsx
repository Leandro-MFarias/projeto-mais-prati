import { Journey } from "@/components/journey";
import { NavBar } from "@/components/navBar";

export function HomePage() {
  return (
    <div className="flex h-screen flex-col-reverse lg:flex-row">
      <NavBar />
      <Journey />
    </div>
  );
}
