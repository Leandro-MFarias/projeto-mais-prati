// import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import exercises from "../service/exercises.json";

export function Journey() {
  return (
    <div className="flex flex-1 flex-col items-center space-y-20 py-10">
      {/* HEADER OF SECTION */}
      <div className="flex w-full items-center space-x-4 px-16">
        <div className="h-[1px] w-full bg-neutral-600" />
        <p className="text-xl font-bold">Introdução</p>
        <div className="h-[1px] w-full bg-neutral-600" />
      </div>

      {/* BLOCKS OF EXERCISE */}
      <div className="space-y-2">
        {exercises.map((exerciseGroup) => (
          <div
            key={exerciseGroup[0].id}
            className="flex flex-col items-center space-y-3"
          >
            <div>
              <button
                className={`btn-exercise relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full ${exerciseGroup[0].completed === true ? "bg-lime-500" : "bg-zinc-600"}`}
              >
                <FaStar className="text-2xl" />
                {/* <div className="absolute bottom-0 h-10 w-10 bg-zinc-100" /> */}
              </button>
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
