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
  const [filter, setFilter] = useState("");

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
    <div className="w-full h-auto flex md:flex-row flex-col">
      {/* NavBar */}
      <NavBar abrirModal={AbrirModalPost}></NavBar>

      {/* Página */}
      <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[1%] mt-[48%]">
        <input
          type="text"
          placeholder="Pesquise por Usuários"
          className="w-[80%] py-[1%] rounded-4xl px-4 mb-[2%] border-black border-2 text-black placeholder-black md:text-[18px]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed z-80 w-full h-full flex items-center justify-center">
          <div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={AbrirModalPost}
          ></div>
          <AddPost abrirModal={AbrirModalPost}></AddPost>
        </div>
      )}
    </div>
  );
}
