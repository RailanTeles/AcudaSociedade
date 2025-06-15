"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavBar from "../Components/NavBar";
import AddPost from "../Components/AddPost";
import { useAuth } from "../Context/AuthContext";
import MyInformations from "../Components/MyInformations";
import EditProfile from "../Components/EditProfile";
import { typePost } from "../page";
import Post from "../Components/Post";
import EditPost from "../Components/EditPost";

export type TypeUser = {
  idUser: number;
  isOng: boolean;
  userImagem: string | null;
  userExi: string;
  username: string;
  userEmail: string;
  userDesc: string | null;
  exiEmail: string | null;
  exiInsta: string | null;
  exiTel: string | null;
  exiDoacao: string | null;
  exiLoc: string | null;
  exiPosts: typePost[];
}

export default function Profile() {
  // Configurações
  const { isLogged, typeUser } = useAuth();
  const router = useRouter();

  // Dados - Vem do BackEnd - Pode user o Data
  var image: string | null = null;
  var userExi: string = "nome_perfil";
  var username: string = "nome_arroba";
  var desc: string | null =
    "Denúncia sobre descarte irregular de lixo: A denúncia de descarte irregular de lixo é uma atitude essencial para a preservação do meio ambiente e da saúde pública. Quando resíduos são jogados em locais inadequados, como terrenos baldios, ruas ou rios, contribuem para a poluição, proliferação de doenças e entupimento de bueiros. É dever de todos zelar pela limpeza urbana e cobrar ações das autoridades competentes. Cidadãos podem registrar denúncias junto à prefeitura ou órgãos ambientais, preferencialmente com fotos, localização e descrição do ocorrido. A fiscalização correta pode resultar em multas e responsabilização dos infratores. Além disso, campanhas educativas são importantes para conscientizar a população sobre o descarte correto. A coleta seletiva e o uso de ecopontos são alternativas sustentáveis para o destino do lixo. O lixo urbano mal gerenciado afeta diretamente a qualidade de vida nas comunidades. Denunciar é um ato de cidadania e respeito com o próximo. Somente com a colaboração de todos é possível construir cidades mais limpas e saudáveis.";
  var emailExibi: string | null = "teste@gmail.com";
  var insta: string | null = "https://www.instagram.com/railanteles12";
  var tel: string | null = "759839234";
  var doacao: string | null = "meupix";
  var loc: string | null = "Fraga";

  // Modais
  const [modal, setModal] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [modalEditPost, setModalEditPost] = useState(false);
  const [editedPost, setEditedPost] = useState<number | null>(null);
  const posts: typePost[] = [
    {
      idPost: 1,
      idUser: 1,
      userImagem: null,
      userExi: "Maria Silva",
      username: "mariasilva",
      hour: new Date("2025-06-14T10:30:00"),
      desc: "Apreciando a natureza no parque 🌿",
      imagem:
        "https://vladimiraraujo.com/wp-content/uploads/2024/12/A-milagrosa-criacao-de-Deus-Blog-Vladimiraraujo.png",
      loc: "Parque Central",
      typePos: "Normal",
      status: null,
    },
    {
      idPost: 4,
      idUser: 1,
      userImagem: null,
      userExi: "Carlos Lima",
      username: "carloslima",
      hour: new Date("2025-02-14T18:45:00"),
      desc: "Finalizamos a reforma da praça! 🏞️",
      imagem: null,
      loc: "Praça Nova",
      typePos: "ProjetoSocial",
      status: "Completo",
    },
  ];

  // Métodos
  const AbrirModalPost = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const AbrirModalEdit = () => {
    if (modalEditProfile == false) {
      setModalEditProfile(true);
    } else {
      setModalEditProfile(false);
    }
  };

  const AbrirEditPost = (value: null | number) => {
    if (modalEditPost == false) {
      setModalEditPost(true);
      setEditedPost(value);
    } else {
      setModalEditPost(false);
      setEditedPost(null);
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
        <div className="w-[90%] md:h-[20%] h-[10%] min-h-[70px] my-[1%] flex items-center relative md:max-h-[150px] max-h-[90px]">
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
        <div className="max-w-[90%] my-[2%] flex overflow-y-auto">
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
        <div className="w-full flex items-center flex-col">
          {posts.slice(0, 4).map((post) => (
            <Post key={post.idPost} post={post} editPost={AbrirEditPost}></Post>
          ))}
        </div>
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
      {modalEditProfile && (
        <div className="absolute z-80 w-full h-full flex items-center justify-center">
          <div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={AbrirModalEdit}
          ></div>
          <EditProfile abrirModal={AbrirModalEdit}></EditProfile>
        </div>
      )}
      {modalEditPost && (
        <div className="fixed z-80 w-full h-full flex items-center justify-center">
          <div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={() => AbrirEditPost(null)}
          ></div>
          <EditPost
            abrirModal={AbrirEditPost}
            posts={posts}
            editedPost={editedPost}
          ></EditPost>
        </div>
      )}
    </div>
  );
}
