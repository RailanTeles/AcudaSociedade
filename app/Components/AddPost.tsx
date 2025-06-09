"use client";

import { useEffect, useState } from "react";

type AddProps = {
  abrirModal: () => void;
};

export default function AddPost({ abrirModal }: AddProps) {
  const [type, setType] = useState("");
  const [haveStatus, setHaveStatus] = useState(false);

  // useEffect(() => {
  //   if (isLogged === false) {
  //     router.push("/Login");
  //   }
  // }, [isLogged, router]);

  return (
    <div className="bg-white flex flex-col items-center justify-evenly xl:h-[92%] xl:w-[75%] lg:h-[90%] lg:w-[80%] md:h-[85%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
      <h1
        onClick={abrirModal}
        className="absolute top-0 right-0 md:mr-[3%] mr-[5%] mt-[2%] text-[35px] font-extrabold text-[#274CB4] cursor-pointer"
      >
        X
      </h1>
      <form
        className="w-full h-full flex flex-col items-center justify-evenly"
        //   onSubmit={}
      >
        <textarea
          placeholder="Dê uma descrição para a sua postagem!"
          className="md:w-[50%] w-[80%] resize-none rounded-[4px] px-0.5 border-black border-2 placeholder-black"
          required
        ></textarea>
        <input
          type="file"
          id="file-upload"
          placeholder="Escolha a Imagem para colocar na postagem!"
          className="border-black border-2 placeholder-black md:w-[50%] w-[80%] h-[20%] text-center cursor-pointer"
          accept="image/jpeg, image/png, image/jpg"
        />

        <div className="flex flex-row justify-between items-center md:w-[50%] w-[80%] md:h-[4%] h-[8%]">
          <label htmlFor="type" className="md:text-[18px]">
            Tipo do Post:
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
                setType(e.target.value);
                setHaveStatus(e.target.value === "ProjetoSocial" || e.target.value === "Denuncia"); // exemplo: só mostra status se for Projeto Social
            }}

            className="w-[60%] h-full rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            required
          >
            <option value=""></option>
            <option value="Normal">Normal</option>
            <option value="ProjetoSocial">Projeto Social</option>
            <option value="Denuncia">Denúncia</option>
          </select>
        </div>

        {haveStatus && (
          <div className="flex flex-row justify-between items-center md:w-[50%] w-[80%] md:h-[4%] h-[8%]">
            <label htmlFor="status" className="md:text-[18px]">
              Status
            </label>
            <select
              name="status"
              id="status"
              //   value={status}
              className="w-[60%] h-full rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              required
            >
              <option value=""></option>
              <option value="NaoIniciado">Não iniciado</option>
              <option value="EmAndamento">Em andamento</option>
              <option value="Completo">Completo</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] md:w-[20%] w-[50%] md:h-[8%] h-[10%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
        >
          Postar
        </button>
      </form>
    </div>
  );
}
