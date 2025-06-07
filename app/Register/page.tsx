"use client";

import { use, useState } from "react";

export default function Register() {
  const [userExi, setUserExi] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [isOng, setIsOng] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [color, setColor] = useState("");

  const Ong = () =>{
    if(type == "pf"){
        setIsOng(false);
    } else {
        setIsOng(true);
    }
  }

  const VerifyPassword = () =>{
    if(password !== confirmPassword){
        return false;
    }
    return true;
  }

  const Cadastrar = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    Ong();

    if(VerifyPassword()){
        // Adicionar aqui o backend para o envio dos dados

        setMessage("Cadastro Completo! Pode voltar ao Login para Entrar!");
        setColor("text-green-700");
    } else {
        setMessage("Erro: As senhas estão diferentes!");
        setColor("text-red-700");
    }
  };

  return (
    <div className="bg-[#274CB4] w-full h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col items-center justify-evenly xl:h-[92%] xl:w-[75%] lg:h-[90%] lg:w-[80%] md:h-[85%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
        <div className="flex items-center justify-center h-[10%] w-full gap-[5%]">
          <img src="Images/AS-logo.png" alt="" className="h-full" />
          <h1 className="md:text-4xl text-2xl text-center">
            <span className="text-[#274CB4] font-bold">Acuda </span>
            <br />
            <span className="text-[#F9C118] font-bold">Sociedade</span>
          </h1>
        </div>
        <form
          className="flex flex-col items-center justify-between h-[80%] w-full"
          onSubmit={Cadastrar}
        >
          <input
            required
            type="text"
            placeholder="Digite o nome de exibição"
            className="md:w-[50%] w-[80%] md:h-[10%] h-[9%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            value={userExi}
            onChange={(e) => setUserExi(e.target.value)}
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com nome de usuário de exibição"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
          <input
            required
            type="text"
            placeholder="Digite o nome de usuário (@)"
            className="md:w-[50%] w-[80%] md:h-[10%] h-[8%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com nome de usuário"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
          <input
            required
            type="email"
            placeholder="Digite o seu e-mail"
            className="md:w-[50%] w-[80%] md:h-[10%] h-[8%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com o e-mail"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />

          <div className="flex flex-row justify-between items-center md:w-[50%] w-[80%] md:h-[10%] h-[8%]">
            <label htmlFor="type" className="md:text-[18px]">
              Tipo da Conta:
            </label>
            <select
              name="type"
              id="type"
              className="w-[60%] h-full rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option value=""></option>
              <option value="pf">Pessoa Física</option>
              <option value="ong">Ong</option>
            </select>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:w-[90%] w-[80%] md:h-[10%] h-[17%]">
            <input
              required
              type="password"
              placeholder="Digite sua senha"
              className="md:w-[45%] w-[100%] md:h-full h-[49%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Por favor, preencha com a sua senha"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <input
              required
              type="password"
              placeholder="Confirme sua senha"
              className="md:w-[45%] w-[100%] md:h-full h-[49%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Por favor, confirme sua senha"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
          </div>
          <button
            type="submit"
            className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] md:w-[30%] w-[50%] md:h-[10%] h-[8%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
          >
            Cadastrar-se
          </button>
          {message &&
            <p className={`font-bold ${color} md:text-[16px] text-[13px] text-center`}>{message}</p>
          }
        </form>
      </div>
    </div>
  );
}
