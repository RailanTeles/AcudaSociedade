import { TypeUser } from "../Profile/page";

export const users: TypeUser[] = [
  {
    idUser: 1,
    isOng: false,
    userImagem: null,
    userExi: "Joana Almeida",
    username: "jona_almeida09",
    userEmail: "joana.almeida@example.com",
    userDesc: "Ativista da comunidade e voluntária em projetos locais.",
    exiEmail: null,
    exiInsta: null,
    exiTel: null,
    exiDoacao: null,
    exiLoc: null,
    exiPosts: [
      {
        idPost: 201,
        idUser: 1,
        userImagem: null,
        userExi: "jona_almeida09",
        username: "Joana Almeida",
        hour: new Date("2025-06-10T10:00:00"),
        desc: "Campanha de arrecadação para a biblioteca comunitária.",
        imagem: null,
        loc: "Centro Comunitário Vila Bela",
        typePos: "Normal",
        status: null
      }
    ]
  },
  {
    idUser: 2,
    isOng: true,
    userImagem: null,
    userExi: "Projeto Sorrisos",
    username: "projetoSorrisos",
    userEmail: "contato@projetosorrisos.org",
    userDesc: "ONG focada em apoio psicológico e emocional para crianças.",
    exiEmail: "contato@projetosorrisos.org",
    exiInsta: "@Projeto_Sorrisos",
    exiTel: "+55 21 99876-5432",
    exiDoacao: "https://apoie.projetosorrisos.org",
    exiLoc: "Rio de Janeiro, RJ",
    exiPosts: [
      {
        idPost: 202,
        idUser: 2,
        userImagem: null,
        userExi: "Projeto Sorrisos",
        username: "projetoSorrisos",
        hour: new Date("2025-06-12T15:20:00"),
        desc: "Nova sala de atendimento psicológico inaugurada!",
        imagem: null,
        loc: "Unidade Central - RJ",
        typePos: "ProjetoSocial",
        status: "Completo"
      }
    ]
  }
];
