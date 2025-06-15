"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavBar from "../Components/NavBar";
import AddPost from "../Components/AddPost";
import { useAuth } from "../Context/AuthContext";
import { users } from "../test/users";

export default function Search() {
  const { isLogged } = useAuth();
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");

  // Dados Mockados
  const usersList = users;
  const filterUsers = users.filter((user) =>
    user.username.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const allUsers = usersList;

  // Métodos
  const AbrirModalPost = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const tipoDeConta = (bol: boolean) => {
    if (bol) {
      return "Inst.";
    }
    return "Us. Normal";
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
      <div className="lg:w-[80%] md:w-[75%] w-full flex items-center flex-col lg:ml-[22%] md:ml-[27%] md:mt-[1%] mt-[48%]">
        <input
          type="text"
          placeholder="🔍 Pesquise por Usuários"
          className="md:w-[80%] w-[95%] py-[1%] rounded-4xl px-4 mb-[2%] border-black border-2 text-black placeholder-black md:text-[18px]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        {filter ? (
          <div className="md:w-[80%] w-[95%] h-auto flex flex-col">
            {filterUsers.slice(0, 4).map((user) => (
              <a
                className="flex items-center bg-[#274CB4] w-full my-4 p-2 py-4 rounded-3xl md:gap-[30px] gap-[10px] transform transition duration-300 hover:scale-105 cursor-pointer"
                href={`/Profile/${user.username}`}
                key={user.idUser}
              >
                <img
                  src={user.userImagem || "/Images/person-placeholder.png"}
                  alt=""
                  className="md:w-[12%] md:max-w-[100px] w-[25%] max-w-[65px] rounded-full aspect-square"
                />
                <div className="flex flex-col justify-center align-center md:max-w-[300px] max-w-[100px] overflow-hidden">
                  <h1 className="text-white font-bold md:text-2xl text-[15px]">
                    {user.userExi}
                  </h1>
                  <h1 className="text-white font-bold md:text-[15px] text-[12px]">
                    @{user.username}
                  </h1>
                </div>
                <p className="font-bold text-[20px] text-[#274CB4] bg-[#F9C118] md:w-[20%] md:min-w-[20%] min-w-[30%] py-[2%] text-center rounded-2xl">
                  {tipoDeConta(user.isOng)}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="md:w-[80%] w-[95%] h-auto flex flex-col">
            {allUsers.slice(0, 4).map((user) => (
              <a
                className="flex items-center bg-[#274CB4] w-full my-4 p-2 py-4 rounded-3xl md:gap-[30px] gap-[10px] transform transition duration-300 hover:scale-105 cursor-pointer"
                href={`/Profile/${user.username}`}
                key={user.idUser}
              >
                <img
                  src={user.userImagem || "/Images/person-placeholder.png"}
                  alt=""
                  className="md:w-[12%] md:max-w-[100px] w-[25%] max-w-[65px] rounded-full aspect-square"
                />
                <div className="flex flex-col justify-center align-center md:max-w-[300px] max-w-[100px] overflow-hidden">
                  <h1 className="text-white font-bold md:text-2xl text-[15px]">
                    {user.userExi}
                  </h1>
                  <h1 className="text-white font-bold md:text-[15px] text-[12px]">
                    @{user.username}
                  </h1>
                </div>
                <p className="font-bold text-[20px] text-[#274CB4] bg-[#F9C118] md:w-[20%] md:min-w-[20%] min-w-[30%] py-[2%] text-center rounded-2xl">
                  {tipoDeConta(user.isOng)}
                </p>
              </a>
            ))}
          </div>
        )}
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
