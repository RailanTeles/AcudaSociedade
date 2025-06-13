"use client";

import { useEffect, useState } from "react";

type EditProps = {
  abrirModal: () => void;
  image: string;
  userExi: string | null;
  username: string | null;
  insta: string;
  tel: string | null;
  doacao: string | null;
  loc: string | null;
  emailExi: string | null;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setUserExibi: React.Dispatch<React.SetStateAction<string>>;
  setInsta: React.Dispatch<React.SetStateAction<string>>;
  setTel: React.Dispatch<React.SetStateAction<string | null>>;
  setDoacao: React.Dispatch<React.SetStateAction<string | null>>;
  setLoc: React.Dispatch<React.SetStateAction<string | null>>;
  setEmailExi: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function EditProfile({
  abrirModal,
  image,
  userExi,
  username,
  insta,
  tel,
  doacao,
  loc,
  emailExi,
  setImage,
  setUserExibi,
  setInsta,
  setTel,
  setDoacao,
  setLoc,
  setEmailExi,
}: EditProps) {
  const [imageExi, setImageExi] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImageExi(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const ExcluirImagem = () => {
    setImageExi(null);
    setImageUrl("");
  };

  return (
    <div className="bg-white flex flex-col items-center justify-evenly xl:h-[92%] xl:w-[75%] lg:h-[90%] lg:w-[80%] md:h-[85%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
      <h1
        onClick={abrirModal}
        className="absolute top-0 right-0 md:mr-[3%] mr-[4%] mt-[2%] text-[35px] font-extrabold text-[#274CB4] cursor-pointer"
      >
        X
      </h1>
      <div className="flex md:flex-row flex-col md:w-[80%] w-[90%]">
        {!image ? (
          <div className="md:w-[50%] w-[80%] h-[40%] flex">
            <input
              type="file"
              id="file-upload"
              //   onChange={handleFileChange}
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
            <img
              src={imageUrl}
              alt=""
              className="md:max-h-full md:max-w-[80%] max-h-[80%] max-w-full w-auto "
            />
            <button
              type="button"
              className="md:text-[12px] text-[10px] text-[#F9C118] font-bold bg-[#274CB4] md:py-[1%] py-[2%] md:px-[3%] px-[5%] rounded-4xl cursor-pointer"
              //   onClick={ExcluirImagem}
            >
              Excluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
