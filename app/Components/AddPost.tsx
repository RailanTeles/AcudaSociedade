"use client";

import { useEffect, useState } from "react";

type AddProps = {
  abrirModal: () => void;
};

export default function AddPost({ abrirModal }: AddProps) {
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const [haveStatus, setHaveStatus] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const ExcluirImagem = () => {
    setImage(null);
    setImageUrl("");
  }

  const EnviarDadosPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (desc.trim() == "") {
      setMessage("A descrição não pode ser vazia...")
    }
  }

  return (
    <div className="bg-white flex flex-col items-center justify-evenly xl:h-[92%] xl:w-[75%] lg:h-[90%] lg:w-[80%] md:h-[85%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
      <h1
        onClick={abrirModal}
        className="absolute top-0 right-0 md:mr-[3%] mr-[4%] mt-[2%] text-[35px] font-extrabold text-[#274CB4] cursor-pointer"
      >
        X
      </h1>
      <form
        className="w-full h-full flex flex-col items-center justify-evenly"
        onSubmit={EnviarDadosPost}
      >
        <textarea
          placeholder="Dê uma descrição para a sua postagem!"
          className="md:w-[50%] w-[80%] h-[10%] resize-none rounded-[4px] px-0.5 border-black border-2 placeholder-black"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        {!image ? (
          <div className="md:w-[50%] w-[80%] h-[40%] flex">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="opacity-0 absolute hidden"
              accept="image/jpeg, image/png, image/jpg"
            />
            <label
              htmlFor="file-upload"
              className="w-full h-full text-center cursor-pointer border-2 border-black rounded-[4px]"
            >
              Clique aqui para adicionar a imagem a postagem!
            </label>
          </div>
        ) : (
          <div className="md:w-[50%] w-[80%] h-[40%] flex md:flex-row flex-col justify-evenly items-center">
            <img src={imageUrl} alt="" className="md:max-h-full md:max-w-[80%] max-h-[80%] max-w-full w-auto " />
            <button
              type="button"
              className="md:text-[12px] text-[10px] text-[#F9C118] font-bold bg-[#274CB4] md:py-[1%] py-[2%] md:px-[3%] px-[5%] rounded-4xl cursor-pointer"
              onClick={ExcluirImagem}
            >
              Excluir
            </button>
          </div>
        )}

        <div className="flex flex-row justify-between items-center md:w-[50%] w-[80%] md:h-[6%] h-[5%]">
          <label htmlFor="type" className="md:text-[18px]">
            Tipo do Post:
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setHaveStatus(
                e.target.value === "ProjetoSocial" ||
                e.target.value === "Denuncia"
              );
            }}
            className="md:w-[60%] w-[80%] h-full rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            required
          >
            <option value=""></option>
            <option value="Normal">Normal</option>
            <option value="ProjetoSocial">Projeto Social</option>
            <option value="Denuncia">Denúncia</option>
          </select>
        </div>

        {haveStatus && (
          <div className="flex flex-row justify-between items-center md:w-[50%] w-[80%] md:h-[6%] h-[5%]">
            <label htmlFor="status" className="md:text-[18px]">
              Status:
            </label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="md:w-[60%] w-[75%] h-full rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
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
          className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] md:w-[20%] w-[50%] h-[8%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
        >
          Postar
        </button>
        {message &&
          (
            <p>{message}</p>
          )
        }
      </form>
    </div>
  );
}
