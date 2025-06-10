"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavBar from "../Components/NavBar";
import AddPost from "../Components/AddPost";
import { useAuth } from "../Context/AuthContext";

export default function Search() {
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
      <NavBar abrirModal={AbrirModalPost}></NavBar>
      <div
        className="md:hidden flex items-center justify-center mt-[-8%] self-center bg-[#274CB4] border-4 border-[#F9C118] w-[80px] h-[80px] z-10 rounded-full"
        onClick={AbrirModalPost}
      >
        <h1 className="text-white text-[50px] font-extrabold">+</h1>
      </div>
      <div className="w-full">Essa é a search!</div>
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
