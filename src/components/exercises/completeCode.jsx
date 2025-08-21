import { IoClose } from "react-icons/io5";
import trophy from "../../assets/trophy.svg";
import { Link } from "react-router";
export function CompleteCode() {
  return (
    <div className="m-auto flex min-h-screen w-4xl flex-col space-y-16 py-9">
      {/* Barra */}
      <div className="flex w-4xl items-center justify-between gap-16">
        <Link to={"/"}>
          <IoClose className="text-5xl transition duration-150 ease-in hover:text-white" />
        </Link>
        <div class="h-4 w-full rounded-full bg-zinc-600 dark:bg-gray-700">
          <div
            class="h-4 rounded-full bg-lime-600 dark:bg-blue-500"
            style={{ width: "45%" }}
          ></div>
        </div>
        <img width="45px" src={trophy} alt="Troféu" />
      </div>
      {/* exercicios */}
      <div className="flex h-96 flex-col justify-between">
        <div>
          <h1 className="text-3xl">Complete o código:</h1>
          <div className="space-y-10 px-8">
            <p>
              Complete o código abaixo para que a condição só seja verdadeira se
              as duas condições forem verdadeiras.
            </p>
            <code className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-1 rounded-full bg-zinc-100" />

                <p>
                  let temConvite = <span className="text-lime-500">true</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-1 w-1 rounded-full bg-zinc-100" />

                <p>
                  let nomeNaLista = <span className="text-red-600">false</span>
                </p>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
