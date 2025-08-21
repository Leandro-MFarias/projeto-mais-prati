import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/login-schema";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function handleForm(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex w-[70%] flex-col items-center space-y-2 xl:w-[55%]"
    >
      <div className="flex w-full flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-extralight">
          E-mail
        </label>
        <input
          type="email"
          className="rounded-md border-2 border-neutral-700/80 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
          {...register("email")}
        />
        <p className="h-5 font-bold text-red-500/80">{errors.email?.message}</p>
      </div>

      <div className="flex w-full flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-extralight">
          Senha
        </label>
        <input
          type="password"
          className="rounded-md border-2 border-neutral-700/80 bg-neutral-950 px-4 py-3 outline-none focus:border-purple-600"
          {...register("password")}
        />
        <p className="h-5 font-bold text-red-500/80">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <input id="remember" type="checkbox" />
        <label htmlFor="remember" className="text-sm font-semibold">
          lembre-me
        </label>
      </div>

      <button
        type="submit"
        className="w-[80%] cursor-pointer rounded-xl bg-purple-700 py-3 font-semibold transition duration-150 ease-in hover:bg-purple-600"
      >
        {isLoading ? "ENTRANDO.." : "ENTRAR"}
      </button>
    </form>
  );
}
