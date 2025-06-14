"use client";

import { useEffect, useState } from "react";

type EditProps = {
  abrirModal: () => void;
};

export default function EditProfile({ abrirModal }: EditProps) {
  // Dados
  const [image, setImage] = useState<string | null>(null);
  const [userExi, setUserExi] = useState("nomePerfil");
  const [username, setUsername] = useState("nome_arroba");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState<string | null>(null);
  const [emailExibi, setEmailExibi] = useState<string | null>(null);
  const [insta, setInsta] = useState<string>(
    "https://www.instagram.com/railanteles12"
  );
  const [tel, setTel] = useState<string | null>(null);
  const [doacao, setDoacao] = useState<string | null>("ong@gmail.com");
  const [loc, setLoc] = useState<string | null>("Fraga Maia");
  const [password, setPassword] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
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
      <form className="w-full h-[90%] flex flex-col items-center justify-evenly">
        {/* Informações Gerais */}
        <div className="flex md:flex-row flex-col md:w-[80%] w-[90%] md:h-[25%] h-[30%] justify-between items-center">
          <input
            required
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="opacity-0 absolute hidden"
            accept="image/jpeg, image/png, image/jpg"
          />
          <label
            htmlFor="file-upload"
            className="md:h-[90%] h-[50%] relative flex items-center justify-center aspect-square text-center self-center cursor-pointer border-2 border-black rounded-full"
          >
            <img
              src={image || "Images/person-placeholder.png"}
              alt=""
              className="w-full h-full rounded-full aspect-square object-cover"
            />
            <div className="md:w-[15%] w-[20%] flex items-center justify-center aspect-square bg-[#F9C118] z-10 absolute top-0 right-0 rounded-full">
              <img src="Images/edit.png" alt="" className="w-[70%]" />
            </div>
          </label>
          <div className="flex md:w-[75%] w-[90%] flex-col md:h-full h-[50%] justify-evenly">
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              className="w-[100%] rounded-4xl md:py-2 py-1 px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              value={userExi.trim()}
              onChange={(e) => setUserExi(e.target.value)}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Por favor, preencha com seu nome de usuário"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              className="w-[100%] rounded-4xl md:py-2 py-1 px-4 border-black border-2 text-black placeholder-black md:text-[18px] bg-gray-200"
              readOnly
              value={`@${username}`}
              title="Esse atributo não pode ser alterado"
              onClick={() => alert("Esse atributo não pode ser alterado")}
            />
          </div>
        </div>
        <textarea
          placeholder="Dê uma descrição para o seu perfil! Caso não queira, deixe vazio!"
          className="md:w-[80%] w-[90%] h-[20%] resize-none rounded-[4px] px-0.5 border-black border-2 placeholder-black"
          value={desc || ""}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <input
          required
          type="password"
          placeholder="Digite sua senha"
          className="w-[30%] h-[7%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity(
              "Por favor, preencha com sua senha"
            )
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </form>
      {/* Mais Informações - Só aparece para Ongs - Comparar com o auth.type*/}
      {/* <div className="flex md:flex-row flex-col md:w-[80%] w-[90%] md:h-[25%] h-[30%] justify-between items-center">
            <div className="flex ">

            </div>
        </div> */}
    </div>
  );
}
