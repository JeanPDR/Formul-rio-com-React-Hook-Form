import { useState } from "react";
import "./styles/globals.css";

import { useForm } from "react-hook-form";

function App() {
  const [output, setOutPut] = useState("");
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createUser(data: any) {
    setOutPut(JSON.stringify(data, null, 2));
  }
  return (
    <>
      <main className="h-screen bg-zinc-50 flex flex-col gap-10 items-center justify-center">
        <form
          onSubmit={handleSubmit(createUser)}
          className=" flex flex-col gap-4 w-full max-w-xs"
        >
          <div className=" flex flex-col gap-1">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              {...register("email")}
              className="border border-zinc-200 shadow-sm rounded h-10"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              {...register("password")}
              className="border border-zinc-200 shadow-sm rounded h-10"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
          >
            Salvar
          </button>
        </form>
        <pre>{output}</pre>
      </main>
    </>
  );
}

export default App;
