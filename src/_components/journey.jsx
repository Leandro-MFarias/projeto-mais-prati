// import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import exercises from "../service/exercises.json";
import { MessageCircle, MessageSquare, MessageSquareText } from "lucide-react";

export function Journey() {
  return (
    <div className="flex flex-1 flex-col items-center space-y-20 py-10">
      {/* HEADER OF SECTION */}
      <div className="flex w-full items-center space-x-4 px-16">
        <div className="h-[1px] w-full bg-neutral-600" />
        <p className="w-full text-center text-xl font-bold">
          Lógica de Programação
        </p>
        <div className="h-[1px] w-full bg-neutral-600" />
      </div>

      {/* BLOCKS OF EXERCISE */}
      <div className="space-y-2">
        {exercises.map((exerciseGroup) => (
          <div
            key={exerciseGroup[0].id}
            className="flex flex-col items-center space-y-4.5"
          >
            <div className="relative">
              <button
                className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full ${exerciseGroup[0].completed === true ? "btn-todo bg-purple-600" : "btn-block bg-zinc-600"}`}
              >
                <FaStar className="text-2xl" />
              </button>
              <div className="absolute">
                <div className="relative inline-block translate-x-2 -translate-y-32 animate-bounce rounded border border-neutral-600/80 bg-[#252627] px-3 py-1 font-bold text-purple-500">
                  START
                  <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-6 border-r-6 border-l-6 border-t-neutral-100 border-r-transparent border-l-transparent"></div>
                </div>
              </div>
            </div>
            <div className="h-4 w-2 rounded-full bg-zinc-500" />
            <div className="h-4 w-2 rounded-full bg-zinc-500" />
            <div className="h-4 w-2 rounded-full bg-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
