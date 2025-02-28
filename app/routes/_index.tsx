import type { MetaFunction } from "@remix-run/node";
import { ListChecks, Minus, PictureInPicture2, Plus, X } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "ToDo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-100 rounded-2xl w-full max-w-2xl mx-auto border-2 shadow-lg">
        <header className="flex flex-row justify-between bg-400 border-b-2 rounded-t-2xl items-center py-3 px-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <ListChecks className="h-5 w-5 sm:h-6 sm:w-6" />
            <h1 className="font-semibold text-lg sm:text-2xl">To Do</h1>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <div className="p-1 cursor-pointer flex items-center justify-center bg-300">
              <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div className="p-1 cursor-pointer flex items-center justify-center bg-300">
              <PictureInPicture2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div className="p-1 cursor-pointer flex items-center justify-center bg-300">
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
        </header>

        <main className="p-4 flex flex-col justify-center items-center w-full">
          <div className="w-full">
            <span className="block text-center mb-2">
              Adicione um item a sua lista
            </span>

            <div className="bg-300/60 border-2 rounded-2xl flex items-center p-2">
              <input
                type="text"
                placeholder="Digite aqui..."
                className="flex-1 bg-transparent outline-none px-0 border-0 appearance-none focus:ring-0"
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
              />
              <Plus className="ml-2 cursor-pointer" />
            </div>
          </div>

          <div>lista</div>
        </main>
      </div>
    </div>
  );
}
