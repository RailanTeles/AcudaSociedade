"use client";

export type typePost = {
  idPost: number;
  idUser: number;
  userImagem: string | null;
  userExi: string;
  username: string;
  hour: Date;
  desc: string;
  imagem: string | null;
  loc: string | null;
  typePos: "Normal" | "ProjetoSocial" | "Denuncia";
  status: null | "NaoIniciado" | "EmAndamento" | "Completo";
};

import { useRouter } from "next/navigation";
import { useAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import AddPost from "./Components/AddPost";
import Post from "./Components/Post";
import EditPost from "./Components/EditPost";

export default function Home() {
  const { isLogged } = useAuth();
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
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
      idPost: 2,
      idUser: 12,
      userImagem: null,
      userExi: "João Costa",
      username: "joaocosta",
      hour: new Date("2025-06-12T14:00:00"),
      desc: "Iniciamos um projeto social incrível hoje! 💪",
      imagem: null,
      loc: "Comunidade Esperança",
      typePos: "ProjetoSocial",
      status: "EmAndamento",
    },
    {
      idPost: 3,
      idUser: 15,
      userImagem:
        "https://blog.exati.com.br/wp-content/uploads/2023/02/limpeza-publica-e-coleta-de-lixo-1.jpg",
      userExi: "Ana Beatrizz Puta",
      username: "anabea",
      hour: new Date("2025-03-13T09:15:00"),
      desc: "Denúncia sobre descarte irregular de lixo: A denúncia de descarte irregular de lixo é uma atitude essencial para a preservação do meio ambiente e da saúde pública. Quando resíduos são jogados em locais inadequados, como terrenos baldios, ruas ou rios, contribuem para a poluição, proliferação de doenças e entupimento de bueiros. É dever de todos zelar pela limpeza urbana e cobrar ações das autoridades competentes. Cidadãos podem registrar denúncias junto à prefeitura ou órgãos ambientais, preferencialmente com fotos, localização e descrição do ocorrido. A fiscalização correta pode resultar em multas e responsabilização dos infratores. Além disso, campanhas educativas são importantes para conscientizar a população sobre o descarte correto. A coleta seletiva e o uso de ecopontos são alternativas sustentáveis para o destino do lixo. O lixo urbano mal gerenciado afeta diretamente a qualidade de vida nas comunidades. Denunciar é um ato de cidadania e respeito com o próximo. Somente com a colaboração de todos é possível construir cidades mais limpas e saudáveis.",
      imagem:
        "https://blog.exati.com.br/wp-content/uploads/2023/02/limpeza-publica-e-coleta-de-lixo-1.jpg",
      loc: "Rua 7 de Setembro",
      typePos: "Denuncia",
      status: "NaoIniciado",
    },
    {
      idPost: 4,
      idUser: 1,
      userImagem: null,
      userExi: "Carlos Lima",
      username: "carloslima",
      hour: new Date("2025-02-14T18:45:00"),
      desc: "Finalizamos a reforma da praça! 🏞️",
      imagem: "https://example.com/praca.jpg",
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
    if (isLogged === false) {
      router.push("/Login");
    }
  }, [isLogged, router]);

  if (isLogged == null) {
    return <Loading/>;
  }

  if (isLogged === false) {
    return null;
  }

  return (
    <div className="w-full h-auto flex md:flex-row flex-col">
      {/* NavBar */}
      <NavBar abrirModal={AbrirModalPost}></NavBar>

      {/* Página */}
      <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[0%] mt-[48%]">
        {posts.slice(0, 4).map((post) => (
          <Post key={post.idPost} post={post} editPost={AbrirEditPost}></Post>
        ))}
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
      
      {/* Editar Post */}
      {modalEdit && (
        <div className="fixed z-80 w-full h-full flex items-center justify-center">
          <div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.7)] bg-opacity-30 cursor-pointer"
            onClick={() => AbrirEditPost(null)}
          ></div>
          <EditPost abrirModal={AbrirEditPost} posts={posts} editedPost={editedPost}></EditPost>
        </div>
      )}
    </div>
  );
}
