import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

export function Daily() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(null);
  const { register, handleSubmit } = useForm();

  const questions = [
    {
      question: "a",
      value: "a",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "b",
      value: "b",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "c",
      value: "c",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "d",
      value: "d",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const correctAnswer = "b";

  function borderColor(optionValue) {
    if (!answer) return "border-neutral-600/80";
    if (optionValue === answer) {
      return answer === correctAnswer ? "border-lime-500" : "border-red-600";
    }
    return "border-neutral-600/80";
  }

  function handleForm(data) {
    setLoading(true);
    setTimeout(() => {
      setAnswer(data.daily);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="mx-6 flex flex-1 flex-col items-center space-y-12 pt-28">
      <h2 className="text-center text-xl">
        <span className="font-bold text-purple-600">PERGUNTA:</span> Lorem
        ipsum, dolor sit amet consectetur adipisicing elit.
      </h2>

      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex w-full flex-col space-y-8 lg:w-[80%]"
      >
        {questions.map((question, index) => (
          <label
            htmlFor={question.question}
            className={`flex cursor-pointer items-center space-x-2 rounded-lg border bg-neutral-700/60 px-4 py-4 ${borderColor(question.value)}`}
            key={index}
          >
            <input
              type="radio"
              name="daily"
              value={question.value}
              id={question.question}
              {...register("daily")}
            />
            <p className="pl-2 text-lg sm:pl-0">{question.description}</p>
          </label>
        ))}

        {answer !== null &&
          (answer === correctAnswer ? (
            <div className="flex items-center justify-center space-x-2">
              <FaCheckCircle className="text-4xl text-lime-500" />
              <p className="text-xl font-bold">Resposta Correta!</p>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <IoCloseCircle className="text-4xl text-red-600" />
              <p className="text-xl font-bold">Resposta Errada!</p>
            </div>
          ))}

        {answer === null && (
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer self-center rounded-md bg-purple-700 px-32 py-3 text-lg font-bold hover:bg-purple-600 lg:w-auto lg:self-end"
          >
            {loading ? "Enviando.." : "Enviar"}
          </button>
        )}
      </form>
    </div>
  );
}
