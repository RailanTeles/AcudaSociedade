"use client";

import React, { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "../Components/Loading";

export default function Recover() {
  const searchParams = useSearchParams();

  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const [validToken, setValidToken] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const [myEmail, setMyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);

  const VerifyPassword = () =>{
    if(password !== confirmPassword){
        return false;
    }
    return true;
  }

  const Recuperar = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      "Enviamos um e-mail com o link para redefinir sua senha para o seu e-mail de cadastro. Confira sua caixa de entrada ou spam e siga as instruções!"
    );
  };

  const TrocarSenha = (e: React.FormEvent) => {
    e.preventDefault();

    if(VerifyPassword()){
        // Adicionar aqui o backend para o envio dos dados
        setPasswordMessage("Alteração Completa! Pode voltar ao Login para Entrar!");
    } else {
        setPasswordMessage("Erro: As senhas estão diferentes!");
    }
  };

  useEffect(() => {
    const uidb64 = searchParams.get("uidb64");
    const token = searchParams.get("token");

    // Aqui ele vê se existe token na url
    if (uidb64 && token) {
      setHasToken(true);
      // Aqui o backend vai ter que verificar se o token é válido e pegar o email do token
      setValidToken(true);
      setMyEmail("railan@gmail.com");
    } else {
      setHasToken(false);
    }
  }, [searchParams]);

  if (hasToken == false) {
    return (
      <div className="bg-[#274CB4] w-full h-screen flex items-center justify-center">
        <div className="bg-white flex flex-col items-center justify-center gap-[10%] xl:h-[75%] xl:w-[70%] lg:h-[75%] lg:w-[70%] md:h-[75%] md:w-[70%] sm:w-[70%] w-[95%] h-[75%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-center h-[10%] w-full gap-[5%]">
            <img src="Images/AS-logo.png" alt="" className="h-full" />
            <h1 className="md:text-4xl text-2xl text-center">
              <span className="text-[#274CB4] font-bold">Acuda </span>
              <br />
              <span className="text-[#F9C118] font-bold">Sociedade</span>
            </h1>
          </div>
          <form
            className="flex flex-col items-center gap-[20%] h-[30%] w-full"
            onSubmit={Recuperar}
          >
            <input
              required
              type="email"
              placeholder="Digite seu e-mail"
              className="md:w-[50%] w-[80%] md:h-[35%] h-[35%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Por favor, preencha com seu e-mail"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />

            <button
              type="submit"
              className="md:text-2xl text-[18px] text-[#F9C118] font-bold bg-[#274CB4] lg:w-[35%] md:w-[45%] w-[60%] md:h-[35%] h-[35%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
            >
              Recuperar Senha
            </button>
          </form>
          {message && (
            <div className="md:w-[70%] w-[95%]">
              <p className={`font-bold md:text-[16px] text-[13px] text-center`}>
                {message}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  } else if (hasToken == true) {
    return (
      <div className="bg-[#274CB4] w-full h-screen flex items-center justify-center">
        {validToken ? (
          <div className="bg-white flex flex-col items-center justify-center gap-[5%] xl:h-[75%] xl:w-[70%] lg:h-[75%] lg:w-[70%] md:h-[75%] md:w-[70%] sm:w-[70%] w-[95%] h-[75%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
            <div className="flex items-center justify-center h-[10%] w-full gap-[5%]">
              <img src="Images/AS-logo.png" alt="" className="h-full" />
              <h1 className="md:text-4xl text-2xl text-center">
                <span className="text-[#274CB4] font-bold">Acuda </span>
                <br />
                <span className="text-[#F9C118] font-bold">Sociedade</span>
              </h1>
            </div>
            <p className="text-[#274CB4] font-bold text-center">
              Olá {myEmail}
            </p>
            <form
              className="flex flex-col items-center justify-evenly h-[50%] w-full"
              onSubmit={TrocarSenha}
            >
              <input
                required
                type="password"
                placeholder="Digite sua nova senha"
                className="md:w-[50%] w-[90%] h-[20%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(
                    "Por favor, preencha com a sua nova senha"
                  )
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
              <input
                required
                type="password"
                placeholder="Confirme sua nova senha"
                className="md:w-[50%] w-[90%] h-[20%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(
                    "Por favor, confirme sua nova senha"
                  )
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
              <button
                type="submit"
                className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] md:w-[30%] w-[50%] md:h-[20%] h-[15%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
              >
                Alterar
              </button>
            </form>
            {passwordMessage && (
            <div className="md:w-[70%] w-[95%]">
              <p className={`font-bold md:text-[16px] text-[13px] text-center`}>
                {passwordMessage}
              </p>
            </div>
          )}
          </div>
        ) : (
          <div className="bg-white flex flex-col items-center justify-center gap-[10%] xl:h-[75%] xl:w-[70%] lg:h-[75%] lg:w-[70%] md:h-[75%] md:w-[70%] sm:w-[70%] w-[95%] h-[75%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
            <div className="flex items-center justify-center h-[10%] w-full gap-[5%]">
              <img src="Images/AS-logo.png" alt="" className="h-full" />
              <h1 className="md:text-4xl text-2xl text-center">
                <span className="text-[#274CB4] font-bold">Acuda </span>
                <br />
                <span className="text-[#F9C118] font-bold">Sociedade</span>
              </h1>
            </div>
            <h1 className="md:text-2xl text-[20px] text-[#274CB4] font-bold text-center">
              Você demorou tempo demais... <br /> Requisite uma nova validação:
            </h1>
            <a
              href="/Recover"
              className="md:w-[30%] md:h-[10%] h-[13%] w-[70%] cursor-pointer flex"
            >
              <button
                type="submit"
                className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] w-full h-full rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
              >
                Requisitar
              </button>
            </a>
          </div>
        )}
      </div>
    );
  } else {
    <Loading></Loading>;
  }
}
