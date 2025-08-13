import { Link } from "react-router";

export function LoginPage() {
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
        <form className="flex w-[70%] flex-col items-center space-y-6 xl:w-[55%]">
          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-extralight">
              E-mail
            </label>
            <input
              type="text"
              className="rounded-md border-2 border-neutral-900 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
            />
          </div>

          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-extralight">
              Senha
            </label>
            <input
              type="text"
              className="rounded-md border-2 border-neutral-900 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember" className="text-sm font-semibold">
              lembre-me
            </label>
          </div>

          <button className="w-[80%] cursor-pointer rounded-xl bg-purple-700 py-3 font-semibold transition duration-150 ease-in hover:bg-purple-600">
            ENTRAR
          </button>
        </form>
        <Link to={"/register"}>
          <p className="text-center">
            Não possui cadastro?
            <span className="font-semibold text-purple-500"> CADASTRE-SE</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
