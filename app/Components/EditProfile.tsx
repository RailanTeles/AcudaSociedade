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
  const [imageUrl, setImageUrl] = useState<string>(image);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="bg-white flex fixed flex-col items-center justify-evenly xl:h-[92%] xl:w-[75%] lg:h-[90%] lg:w-[80%] md:h-[85%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs overflow-hidden">
      <h1
        onClick={abrirModal}
        className="absolute top-0 right-0 md:mr-[3%] mr-[4%] mt-[2%] text-[35px] font-extrabold text-[#274CB4] cursor-pointer"
      >
        X
      </h1>
      {/* Informações do Perfil - 1 */}
      <div className="w-full h=[90%] flex flex-col items-center justify-evenly">
        <div className="flex md:flex-row flex-col md:w-[80%] w-[90%]">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="opacity-0 absolute hidden"
            accept="image/jpeg, image/png, image/jpg"
          />
          <label
            htmlFor="file-upload"
            className="md:w-[20%] w-[30%] relative flex items-center justify-center aspect-square text-center self-center cursor-pointer border-2 border-black rounded-full"
          >
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full rounded-full aspect-square object-cover"
            />
            <div className="md:w-[15%] w-[20%] flex items-center justify-center aspect-square bg-[#F9C118] z-10 absolute top-0 right-0 rounded-full">
              <img src="Images/edit.png" alt="" className="w-[70%]" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
