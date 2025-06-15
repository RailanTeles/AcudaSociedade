import { useEffect, useState } from "react";
import { typePost } from "../page";

type PostProps = {
  post: typePost;
};

export default function Post({ post }: PostProps) {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    if (post.status === "NaoIniciado") {
      setColor("red");
    } else if (post.status === "EmAndamento") {
      setColor("yellow");
    } else if (post.status === "Completo") { 
      setColor("green");
    } else if (post.status === null) {
      setColor("gray"); 
    } else {
      setColor("green"); 
    }
  }, [post.status]);

  function formatarTempoRelativo(data: Date): string {
    const agora = new Date();
    const diff = agora.getTime() - data.getTime();

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    if (horas < 24) {
      return `${horas}h atrás`;
    } else if (dias < 30) {
      return `${dias} dia${dias > 1 ? "s" : ""} atrás`;
    } else if (meses < 12) {
      return `${meses} mês${meses > 1 ? "es" : ""} atrás`;
    } else {
      return `${anos} ano${anos > 1 ? "s" : ""} atrás`;
    }
  }

  function formatarTipos(filtro: string | null): string {
    if (filtro === null) {
      return "";
    }
    switch (filtro) {
      case "Normal":
        return "Normal";
      case "ProjetoSocial":
        return "Projeto Social";
      case "Denuncia":
        return "Denúncia";
      case "NaoIniciado":
        return "Não Iniciado";
      case "EmAndamento":
        return "Em Andamento";
      case "Completo":
        return "Completo";

      default:
        console.warn(`Termo '${filtro}' não mapeado em formatarTipos.`);
        return filtro;
    }
  }

  return (
    <div className="flex relative flex-col bg-[#274CB4] text-white md:w-[90%] w-[95%] md:min-h-[150px] min-h-[100px] items-end md:my-[1%] my-[3%] md:p-[1%] p-[3%] rounded-[15px] rounded-tl-[0px] md:text-[16px] text-[12px] text-center">
      {/* Imagem */}
      <div className="flex items-center justify-center absolute top-0 left-0 md:w-[12%] w-[20%] aspect-square m-[1%] object-cover">
        <img
          src={post.userImagem || "Images/person-placeholder.png"}
          alt=""
          className="w-[90%] aspect-square rounded-full object-cover"
        />
      </div>
      {/* Informações */}
      <div className="md:w-[85%] w-[75%] flex my-[1%] gap-[12px] items-center">
        <p className="font-bold">{post.userExi}</p>
        <p>@{post.username}</p>
        <div className="h-[15px] aspect-square bg-white rounded-full"></div>
        <p>{formatarTempoRelativo(new Date(post.hour))}</p>
      </div>
      <div className="md:w-[85%] w-[75%] flex my-[1%] text-left md:max-h-[250px] max-h-[150px] overflow-y-auto">
        <p>{post.desc}</p>
      </div>
      {/* Imagem */}
      {post.imagem && (
        <div className="md:w-[85%] w-[75%] my-[1%] flex items-center justify-center">
          <img
            src={post.imagem}
            alt=""
            className="max-w-[100%] max-h-[400px]"
          />
        </div>
      )}
      {/* Status */}
      <div className="flex w-full md:items-center items-end justify-evenly my-[1%] mt-[3%] md:flex-row flex-col md:gap-0 gap-[1%]">
        {post.loc && (
          <div className="flex items-center md:justify-center gap-[10px] my-[1%] md:w-[30%] w-[75%] overflow-hidden">
            <img src="Images/loc.png" alt="" className="md:w-[15%] w-[10%]" />
            <p>{post.loc}</p>
          </div>
        )}
        {post.typePos && (
          <div className="flex items-center md:justify-center gap-[10px] my-[1%] md:w-[30%] w-[75%]">
            <p className="font-bold">Tipo:</p>
            <p className="bg-[#F9C118] text-black font-bold rounded-4xl w-[65%] py-[1%] px-[2%]">
              {formatarTipos(post.typePos)}
            </p>
          </div>
        )}
        {post.status && (
          <div className="flex items-center md:justify-center gap-[10px] my-[1%] md:w-[33%] w-[75%]">
            <p className="font-bold">Status:</p>
            <p className={`bg-${color}-700 text-black font-bold rounded-4xl w-[65%] py-[1%] px-[2%]`}>
              {formatarTipos(post.status)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
