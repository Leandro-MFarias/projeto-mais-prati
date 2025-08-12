import { Link } from "react-router";

export function LoginPage() {
  return (
    <div className="grid h-screen grid-cols-2 bg-zinc-800 text-zinc-300">
      {/* CONTAINER IMAGE */}
      <div className="relative flex items-center justify-center bg-[url(/code.png)] bg-no-repeat">
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative text-center text-4xl font-semibold text-white">
          Aprenda programação de forma leve, divertida e viciante
        </h1>
      </div>

      {/* CONTAINER FORM  */}
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-purple-600">LOGO AQUI</h1>
        <form className="flex flex-col items-center space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-extralight">
              E-mail
            </label>
            <input
              type="text"
              className="w-[520px] rounded-md border-2 border-neutral-900 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-extralight">
              Senha
            </label>
            <input
              type="text"
              className="w-[520px] rounded-md border-2 border-neutral-900 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember" className="text-sm font-semibold">
              lembre-me
            </label>
          </div>

          <button className="w-[70%] cursor-pointer rounded-xl bg-purple-700 py-3 font-semibold transition duration-150 ease-in hover:bg-purple-600">
            ENTRAR
          </button>
        </form>
        <Link to={"/register"}>
          <p>
            Não possui cadastro?
            <span className="font-semibold text-purple-500"> CADASTRE-SE</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
