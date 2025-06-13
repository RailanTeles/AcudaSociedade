export default function MyInformations() {
  return (
    <div className="w-[90%] my-[2%] flex md:flex-row flex-col relative justify-evenly md:items-baseline items-center md:gap-0 flex-wrap">
      <div className="flex flex-col items-center w-[30%] gap-[10px] min-w-[250px] overflow-hidden my-[1%] md:border-0 border-t-2 border-[#274CB4]">
        <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">
          Redes Sociais
        </h1>
        <a href="mailto:ong@gmail.com" className="flex items-center gap-[10px]" target="_blank">
          <img src="Images/email.png" alt="" />
          <p className="font-bold md:text-[14px] text-[12px]">ong@gmail.com</p>
        </a>
        <a
          href="https://www.instagram.com/railanteles12"
          className="flex items-center gap-[10px]"
          target="_blank"
        >
          <img src="Images/instagram.png" alt="" />
          <p className="font-bold md:text-[14px] text-[12px]">
            ong@gmail.comdsfsdgsdfsdgfd
          </p>
        </a>
        <a
          href="https://wa.me/75982062321"
          className="flex items-center gap-[10px]"
          target="_blank"
        >
          <img src="Images/whatsapp.png" alt="" />
          <p className="font-bold md:text-[14px] text-[12px]">75982062321</p>
        </a>
      </div>

      <div className="flex flex-col items-center w-[30%] gap-[10px] min-w-[250px] my-[1%] overflow-hidden md:border-0 border-t-2 border-[#274CB4]">
        <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">Doação</h1>
        <div className="flex items-center gap-[10px]">
          <img src="Images/pix.png" alt="" />
          <p className="font-bold md:text-[14px] text-[12px]">ong@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-[30%] gap-[10px] min-w-[250px] my-[1%] overflow-hidden md:border-0 border-t-2 border-[#274CB4]">
        <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">Localização</h1>
        <div className="flex items-center gap-[10px]">
          <img src="Images/marcador.png" alt="" />
          <p className="font-bold md:text-[14px] text-[12px]">Fraga Maia</p>
        </div>
      </div>
    </div>
  );
}
