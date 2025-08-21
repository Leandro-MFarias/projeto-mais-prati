import { Link } from "react-router";
import { RegisterForm } from "../components/forms/registerForm";

export function RegisterPage() {
  return (
    <div className="relative h-screen md:h-auto text-zinc-300 md:static md:grid md:grid-cols-2 md:bg-zinc-800">
      {/* CONTAINER IMAGE */}
      <div className="absolute -z-10 md:z-0 flex h-screen items-center justify-center bg-[url(/code.png)] bg-no-repeat md:relative">
        <div className="absolute inset-0 bg-black/90 md:bg-black/70"></div>

        <h1 className="invisible relative md:visible text-center text-4xl font-semibold md:text-white">
          Aprenda programação de forma leve, divertida e viciante
        </h1>
      </div>

      {/* CONTAINER FORM  */}
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-purple-600">LOGO AQUI</h1>
        <RegisterForm />
        <Link to={"/login"}>
          <p className="text-center">
            Já tem uma conta?
            <span className="font-semibold text-purple-500"> ENTRAR</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
