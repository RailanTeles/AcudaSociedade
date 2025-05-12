"use client";
type FormularioProps = {
  onMudar: () => void;
};

export default function Formulario({ onMudar }: FormularioProps) {
  const Entrar = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-full flex">
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
            type="text"
            name=""
            id=""
            placeholder="Digite seu nome de usuário"
            className="w-[80%] md:h-[14%] h-[18%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            onInvalid={(e) =>e.currentTarget.setCustomValidity("Por favor, preencha com seu nome de usuário")}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
          <input
            required
            type="password"
            name=""
            id=""
            placeholder="Digite sua senha"
            className="w-[80%] md:h-[14%] h-[18%] rounded-4xl px-4 border-black border-2 text-black placeholder-black md:text-[18px]"
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Por favor, preencha com sua senha"
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
          {/* <a href="" className="sm:text-[15px] text-[13px] md:mt-[-10%] mt-[-1%] self-end mr-[12%] text-blue-700 font-bold">Esqueceu a senha?</a> */}
          <button 
          type="submit"
          className="md:text-2xl text-[20px] text-[#F9C118] font-bold bg-[#274CB4] w-[50%] md:h-[12%] rounded-4xl cursor-pointer"
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
    </div>
  );
}
