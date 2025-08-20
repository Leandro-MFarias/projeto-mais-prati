export function Daily() {
  return (
    <div className="mx-6 flex flex-1 flex-col items-center space-y-12 pt-28">
      <h2 className="text-center text-xl">
        <span className="font-bold text-purple-600">PERGUNTA:</span> Lorem
        ipsum, dolor sit amet consectetur adipisicing elit.
      </h2>

      <form className="flex w-full flex-col space-y-6 lg:w-[80%]">
        <label
          htmlFor="question-a"
          className="flex cursor-pointer items-center space-x-2 rounded-lg border border-neutral-600/80 bg-neutral-700/60 px-4 py-3"
        >
          <input type="checkbox" name="a" id="question-a" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </label>

        <label
          htmlFor="question-a"
          className="flex cursor-pointer items-center space-x-2 rounded-lg border border-neutral-600/80 bg-neutral-700/60 px-4 py-3"
        >
          <input type="checkbox" name="a" id="question-a" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </label>

        <label
          htmlFor="question-a"
          className="flex cursor-pointer items-center space-x-2 rounded-lg border border-neutral-600/80 bg-neutral-700/60 px-4 py-3"
        >
          <input type="checkbox" name="a" id="question-a" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </label>

        <label
          htmlFor="question-a"
          className="flex cursor-pointer items-center space-x-2 rounded-lg border border-neutral-600/80 bg-neutral-700/60 px-4 py-3"
        >
          <input type="checkbox" name="a" id="question-a" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <button className="cursor-pointer self-end rounded-md bg-purple-700 px-32 py-3 text-lg font-bold hover:bg-purple-600">
          Enviar
        </button>
      </form>
    </div>
  );
}
