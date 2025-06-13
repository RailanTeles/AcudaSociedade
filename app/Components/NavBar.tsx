"useclient";

type NavProps = {
    abrirModal: () => void;
}

export default function NavBar( {abrirModal} : NavProps) {
  return (
    <div className="fixed flex md:flex-col bg-[#274CB4] items-center md:justify-start justify-evenly lg:w-[22%] md:w-[27%] w-full md:h-full h-auto rounded-br-[25px] md:rounded-tr-[25px] md:rounded-bl-[0px] rounded-bl-[25px] md:py-[2%] md:pb-[0%] py-[6%] pb-[10%] md:gap-[10%] box-border z-10">
      <div className="w-full md:flex hidden justify-evenly items-center">
        <img
          src="Images/AS-logo.png"
          alt=""
          className="bg-white rounded-full w-[25%] md:flex hidden"
        />
        <h1 className="text-center lg:text-[22px] md:text-[16px]">
          <span className="text-white font-bold">Acuda </span>
          <br />
          <span className="text-[#F9C118] font-bold">Sociedade</span>
        </h1>
      </div>
      <a
        href="/"
        className="flex items-center gap-[10%] md:w-[70%] transform transition duration-300 hover:scale-110"
      >
        <img src="Images/home.png" alt="" className="md:w-[25%] w-[100%]" />
        <h1 className="hidden md:flex text-[#F9C118] font-bold lg:text-[22px] md:text-[16px]">
          Início
        </h1>
      </a>
      <a
        href="/Search"
        className="flex items-center gap-[10%] md:w-[70%] transform transition duration-300 hover:scale-110"
      >
        <img src="Images/search.png" alt="" className="md:w-[25%] w-[100%]" />
        <h1 className="hidden md:flex text-[#F9C118] font-bold lg:text-[22px] md:text-[16px]">
          Pesquisar
        </h1>
      </a>
      <a
        href="/Profile"
        className="flex items-center gap-[10%] md:w-[70%] transform transition duration-300 hover:scale-110"
      >
        <img src="Images/perfil.png" alt="" className="md:w-[25%] w-[100%]" />
        <h1 className="hidden md:flex text-[#F9C118] font-bold lg:text-[22px] md:text-[16px]">
          Meu Perfil
        </h1>
      </a>
      <div
        className="hidden md:flex bg-[#F9C118] rounded-[30px] px-[25%] py-[8%] transform transition duration-300 hover:scale-110 hover:text-white cursor-pointer"
        onClick={abrirModal}
      >
        <h1 className="text-[#274CB4] font-bold text-[24px]">Postar</h1>
      </div>

      <div
        className="md:hidden absolute flex items-center justify-center mt-[40%] self-center bg-[#274CB4] border-4 border-[#F9C118] w-[80px] h-[80px] z-10 rounded-full"
        onClick={abrirModal}
      >
        <h1 className="text-white text-[50px] font-extrabold">+</h1>
      </div>

    </div>
  );
}
