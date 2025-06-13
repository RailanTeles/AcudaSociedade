"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavBar from "../Components/NavBar";
import AddPost from "../Components/AddPost";
import { useAuth } from "../Context/AuthContext";
import MyInformations from "../Components/MyInformations";

export default function Profile() {
  const { isLogged } = useAuth();
  const router = useRouter();
  const [modal, setModal] = useState(false);

  // Métodos
  const AbrirModalPost = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  // useEffect(() => {
  //   if (isLogged === false) {
  //     router.push("/Login");
  //   }
  // }, [isLogged, router]);

  // if (isLogged == null) {
  //   return <Loading/>;
  // }

  // if (isLogged === false) {
  //   return null;
  // }

  return (
    <div className="w-full h-screen flex md:flex-row flex-col">
      {/* NavBar */}
      <NavBar abrirModal={AbrirModalPost}></NavBar>

      {/* Página Do Perfil */}
      <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[0%] mt-[48%]">
        <div className="w-[90%] md:h-[20%] h-[10%] my-[1%] flex items-center relative">
          <img
            src="Images/person-placeholder.png"
            alt=""
            className="rounded-full border-2 h-full md:mr-[6%] mr-[4%]"
          />
          <div className="flex flex-col gap-0.5">
            <p className="font-bold md:text-[40px]">nomePerfil</p>
            <p className="font-bold md:text-[20px] text-gray-700">
              @nome_arroba
            </p>
          </div>
          <button
            type="button"
            className="md:text-2xl text-[15px] text-black font-bold bg-white md:w-[20%] md:h-[40%] h-[50%] w-[25%] rounded-4xl border-2 cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white absolute right-0"
          >
            Editar
          </button>
        </div>
        <div className="w-[90%] my-[2%] flex relative">
          <p className="md:text-[14px] text-[12px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed vitae ligula id justo sodales varius. Fusce fermentum,
            lacus at fermentum luctus, nisl purus fringilla enim, vel
            scelerisque lorem urna ut libero. Suspendisse potenti. Aenean at
            metus at augue laoreet scelerisque. Integer et justo at lorem
            efficitur tincidunt. Curabitur nec magna ut libero tincidunt
            faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla facilisi. Sed vitae ligula id justo sodales varius. Fusce
            fermentum, lacus at fermentum luctus, nisl purus fringilla enim, vel
            scelerisque lorem urna ut libero. Suspendisse potenti. Aenean at
            metus at augue laoreet scelerisque. Integer et justo at lorem
            efficitur tincidunt. Curabitur nec magna ut libero tincidunt
            faucibus.
          </p>
        </div>

        {/* Minhas Informações */}
        <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
          Minhas Informações
        </h1>
        <hr className="w-full border-[#274CB4] border-1 mb-[2%]"/>
        <MyInformations></MyInformations>

        {/* Minhas Postagens */}
        <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
          Minhas Postagens
        </h1>
        <hr className="w-full border-[#274CB4] border-1 mb-[2%]"/>
      </div>

      {/* Modal Post*/}
      {modal && (
        <div className="absolute z-80 w-full h-full flex items-center justify-center">
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={AbrirModalPost}
          ></div>
          <AddPost abrirModal={AbrirModalPost}></AddPost>
        </div>
      )}
    </div>
  );
}
