"use client";

import AddPost from "@/app/Components/AddPost";
import Loading from "@/app/Components/Loading";
import MyInformations from "@/app/Components/MyInformations";
import NavBar from "@/app/Components/NavBar";
import Post from "@/app/Components/Post";
import { useAuth } from "@/app/Context/AuthContext";
import { users } from "@/app/test/users";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

interface Props {
  params: { username: string };
}

export default function OtherProfile() {
  // Variaveis
  const { isLogged } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editedPost, setEditedPost] = useState<number | null>(null);

  const [found, setFound] = useState<boolean | null>(null);

  // Dados Mockados
  const usersList = users;
  const thisUser = users.find((user) => user.username === params.username);

  // Métodos
  const AbrirModalPost = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const AbrirEditPost = (value: null | number) => {
    if (modalEdit == false) {
      setModalEdit(true);
      setEditedPost(value);
    } else {
      setModalEdit(false);
      setEditedPost(null);
    }
  };

  useEffect(() => {
    const isFound = users.some((user) => user.username === params.username);
    setFound(isFound);
  }, [params.username]);

  //   useEffect(() => {
  //     if (isLogged === false) {
  //       router.push("/Login");
  //     }
  //   }, [isLogged, router]);

  //   if (isLogged == null) {
  //     return <Loading/>;
  //   }

  //   if (isLogged === false) {
  //     return null;
  //   }

  return (
    <div className="w-full h-auto flex md:flex-row flex-col">
      {/* NavBar */}
      <NavBar abrirModal={AbrirModalPost}></NavBar>

      {/* Página */}
      {found ? (
        <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[0%] mt-[48%]">
          <div className="w-[90%] md:h-[45%] h-[10%] min-h-[70px] my-[1%] flex items-center relative md:max-h-[150px] max-h-[90px]">
            <img
              src={thisUser?.userImagem || "/Images/person-placeholder.png"}
              alt=""
              className="rounded-full border-2 h-[95%] max-h-[150px] md:min-h-[130px] md:mr-[6%] mr-[4%] object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <p className="font-bold md:text-[40px]">{thisUser?.userExi}</p>
              <p className="font-bold md:text-[20px] text-gray-700">
                @{thisUser?.username}
              </p>
            </div>
          </div>
          <div className="max-w-[90%] my-[2%] flex overflow-y-auto">
            <p className="md:text-[14px] text-[12px] text-justify">
              {thisUser?.userDesc}
            </p>
          </div>

          {/* Minhas Informações */}
          {thisUser?.isOng && (
            <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
              Minhas Informações
            </h1>
          )}
          {thisUser?.isOng && (
            <hr className="w-full border-[#274CB4] border-1 mb-[2%]" />
          )}

          {thisUser?.isOng && (
            <MyInformations
              email={thisUser?.exiEmail ?? ""}
              insta={thisUser?.exiInsta ?? ""}
              tel={thisUser?.exiTel ?? ""}
              doacao={thisUser?.exiDoacao ?? ""}
              loc={thisUser?.exiLoc ?? ""}
            ></MyInformations>
          )}

          {/* Minhas Postagens */}
          <h1 className="font-bold md:text-[40px] text-2xl mt-[3%] mb-[1%]">
            Minhas Postagens
          </h1>
          <hr className="w-full border-[#274CB4] border-1 mb-[2%]" />
          <div className="w-full flex items-center flex-col">
            {thisUser?.exiPosts.map((post) => (
              <Post
                key={post.idPost}
                post={post}
                editPost={AbrirEditPost}
              ></Post>
            ))}
          </div>
        </div>
      ) : (
        <div className="lg:w-[80%] md:w-[75%] w-full h-screen flex justify-center items-center flex-col lg:ml-[22%] md:ml-[27%]">
          <h1 className="font-bold text-4xl text-center text-[#274CB4]">
            Esta página não está disponível....
          </h1>
        </div>
      )}

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
