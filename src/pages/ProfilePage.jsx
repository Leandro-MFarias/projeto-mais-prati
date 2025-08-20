import { NavBar } from "@/components/navBar";
import { Profile } from "@/components/profile";

export function ProfilePage() {
  return (
    <div className="flex h-screen flex-col-reverse lg:flex-row">
      <NavBar />
      <Profile />
    </div>
  );
}
