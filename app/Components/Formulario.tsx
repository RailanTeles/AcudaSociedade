"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Context/AuthContext"; // ajuste o caminho conforme seu projeto

type FormularioProps = {
  onMudar: () => void;
};

export default function Formulario({ onMudar }: FormularioProps) {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState<boolean | null>(null);

  const Entrar = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Supondo que data tenha 'access' e 'user_id' (ajuste conforme seu backend)
        // Caso seu backend retorne o token como 'access' e o id do usuário separado

        login(data.user_id, data.user_type,data.access); // Salva no contexto e no localStorage

        setMensagemSucesso(true);
        setMensagem("Login realizado com sucesso!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMensagemSucesso(false);
        setMensagem("Usuário ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMensagemSucesso(false);
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Login */}
      <div className="md:w-[50%] md:h-full w-full h-[50%] flex flex-col items-center md:py-[2%] py-[1%]">
        <div className="flex items-center justify-evenly h-[20%] w-full">
          <img src="Images/AS-logo.png" alt="" className="h-full" />
          <h1 className="md:text-4xl text-2xl text-center">
            <span className="text-[#274CB4] font-bold">Acuda </span>
            <br />
            <span className="text-[#F9C118] font-bold">Sociedade</span>
          </h1>
        </div>
        <form
          className="flex flex-col items-center justify-evenly h-[80%] w-full"
          onSubmit={Entrar}
        >
          <input
            required
            type="e-mail"
            placeholder="Digite seu email"
            className="w-[80%] md:h-[14%] h-[18%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com seu email"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
          <input
            required
            type="password"
            placeholder="Digite sua senha"
            className="w-[80%] md:h-[14%] h-[18%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com sua senha"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />

          {mensagem !== "" && (
            <p
              className={`w-[80%] text-center text-[14px] mt-1 mb-3 ${
                mensagemSucesso ? "text-green-600" : "text-red-600"
              }`}
              style={{ marginTop: "6px", marginBottom: "10px" }}
            >
              {mensagem}
            </p>
          )}

          <a
            href="/Recover"
            className="sm:text-[15px] text-[13px] md:mt-[-5%] mt-[-1%] self-end mr-[12%] text-blue-700 font-bold"
          >
            Esqueceu a senha?
          </a>
          <button
            type="submit"
            className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] w-[50%] md:h-[12%] h-[15%] rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
          >
            Entrar
          </button>
          <p
            className="sm:text-[15px] text-[13px] text-blue-700 font-bold text-center cursor-pointer"
            onClick={onMudar}
          >
            Não tem uma conta ainda? <br />
            Clique aqui
          </p>
        </form>
      </div>
      {/* Cadastro */}
      <div className="md:w-[50%] md:h-full w-full h-[50%] flex flex-col items-center md:py-[2%] py-[1%] justify-evenly">
        <div className="flex items-center justify-evenly h-[20%] w-full">
          <img src="Images/AS-logo.png" alt="" className="h-full" />
          <h1 className="md:text-4xl text-2xl text-center">
            <span className="text-[#274CB4] font-bold">Acuda </span>
            <br />
            <span className="text-[#F9C118] font-bold">Sociedade</span>
          </h1>
        </div>
        <p className="lg:text-base md:text-[15px] text-[14px] text-[#274CB4] font-extrabold">
          {" "}
          Exerça sua cidadania e faça a diferença
        </p>
        <div className="w-[70%] flex justify-center items-center">
          <p className="lg:text-base md:text-[15px] text-[14px] text-center">
            Cadastre-se agora e faça parte de uma comunidade que transforma
            vidas. Junte-se a nós e comece a fazer a diferença hoje!
          </p>
        </div>
        <a href="/Register" className="w-[50%] md:h-[10%] h-[13%] cursor-pointer flex">
          <button
            type="submit"
            className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] w-full h-full rounded-4xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
          >
            Cadastrar-se
          </button>
        </a>
        <p
          className="sm:text-[15px] text-[13px] text-blue-700 font-bold text-center cursor-pointer"
          onClick={onMudar}
        >
          Já tem uma conta? Clique aqui
        </p>
      </div>
    </div>
  );
}
