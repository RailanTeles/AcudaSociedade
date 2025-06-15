"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavBar from "../Components/NavBar";
import AddPost from "../Components/AddPost";
import { useAuth } from "../Context/AuthContext";
import MyInformations from "../Components/MyInformations";
import EditProfile from "../Components/EditProfile";

export default function Profile() {
  // Configurações
  const { isLogged } = useAuth();
  const router = useRouter();

  // Dados - Vem do BackEnd - Pode user o Data
  var image: string | null = null;
  var userExi: string = "nome_perfil"
  var username: string = "nome_arroba"
  var desc: string | null = null;
  var emailExibi: string | null = null;
  var insta: string | null = "https://www.instagram.com/railanteles12";
  var tel: string | null = null;
  var doacao: string | null = "meupix";
  var loc: string | null = null;

  // Modais
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // Métodos
  const AbrirModalPost = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const AbrirModalEdit = () => {
    if (modalEdit == false) {
      setModalEdit(true);
    } else {
      setModalEdit(false);
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
    <div className="w-full h-auto flex md:flex-row flex-col">
      {/* NavBar */}
      <NavBar abrirModal={AbrirModalPost}></NavBar>

      {/* Página Do Perfil */}
      <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[0%] mt-[48%]">
        <div className="w-[90%] md:h-[20%] h-[10%] min-h-[70px] my-[1%] flex items-center relative">
          <img
            src={image || "Images/person-placeholder.png"}
            alt=""
            className="rounded-full border-2 h-[85%] md:mr-[6%] mr-[4%] object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <p className="font-bold md:text-[40px]">{userExi}</p>
            <p className="font-bold md:text-[20px] text-gray-700">
              @{username}
            </p>
          </div>
          <button
            type="button"
            className="md:text-2xl text-[15px] text-black font-bold bg-white md:w-[20%] md:h-[40%] h-[50%] w-[25%] rounded-4xl border-2 cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white absolute right-0"
            onClick={AbrirModalEdit}
          >
            Editar
          </button>
        </div>
        <div className="w-[90%] my-[2%] flex relative">
          <p className="md:text-[14px] text-[12px] text-justify">{desc}</p>
        </div>

        {/* Minhas Informações */}
        <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
          Minhas Informações
        </h1>
        <hr className="w-full border-[#274CB4] border-1 mb-[2%]" />
        <MyInformations
          email={emailExibi}
          insta={insta}
          tel={tel}
          doacao={doacao}
          loc={loc}
        ></MyInformations>

        {/* Minhas Postagens */}
        <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
          Minhas Postagens
        </h1>
        <hr className="w-full border-[#274CB4] border-1 mb-[2%]" />
      </div>

      {/* Modal Post*/}
      {modal && (
        <div className="z-80 w-full h-full flex items-center justify-center fixed">
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={AbrirModalPost}
          ></div>
          <AddPost abrirModal={AbrirModalPost}></AddPost>
        </div>
      )}

      {/* Modal Edit*/}
      {modalEdit && (
        <div className="absolute z-80 w-full h-full flex items-center justify-center">
          <div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={AbrirModalEdit}
          ></div>
          <EditProfile
            abrirModal={AbrirModalEdit}
          ></EditProfile>
        </div>
      )}
    </div>
  );
}
