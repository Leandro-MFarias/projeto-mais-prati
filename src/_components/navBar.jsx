import { useNavPage } from "@/store/navPages";
import { DumbbellIcon, RocketIcon, UserRoundCog } from "lucide-react";
import { Link } from "react-router";

export function NavBar() {
  const { page, changePage } = useNavPage()
  
  const navBar = [
    { name: "Jornada", icon: <RocketIcon />, href: "/" },
    { name: "Desafio diário", icon: <DumbbellIcon />, href: "/daily" },
    { name: "Perfil", icon: <UserRoundCog />, href: "/profile" },
  ];

  return (
    <div className="w-full border-t border-neutral-700 py-2 lg:h-screen lg:w-70 lg:space-y-12 lg:border-r lg:px-4 lg:py-8">
      <h1 className="hidden px-4 text-3xl font-bold text-purple-600 lg:block">
        LOGO AQUI
      </h1>
      <nav>
        <ul className="flex items-center justify-center space-x-10 px-6 lg:flex-col lg:items-start lg:justify-start lg:space-y-8 lg:space-x-0 lg:px-0 lg:py-0">
          {navBar.map((item, index) => (
            <Link to={item.href} key={index} className="w-full">
              <li
                className={`group relative flex w-full cursor-pointer flex-col-reverse items-center justify-center rounded-md p-3 text-xl transition duration-150 ease-in hover:bg-zinc-700/50 lg:flex-row lg:justify-start lg:space-x-3 ${page === index ? "border-2 border-neutral-600/80 bg-zinc-700/50 font-semibold text-white" : ""}`}
                onClick={() => changePage(index)}
              >
                {item.icon}
                <p className="w-full text-center absolute -top-12 sm:-top-8 hidden rounded-sm bg-zinc-700/50 px-2.5 group-hover:block lg:static lg:block lg:bg-transparent lg:px-0">
                  {item.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
