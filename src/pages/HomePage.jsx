import { Journey } from "@/_components/journey";
import { NavBar } from "@/_components/navBar";

export function HomePage() {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row">
      <NavBar />
      <Journey />
    </div>
  );
}