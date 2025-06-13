"use client";

type InfoProps = {
  email: string | null;
  insta: string;
  tel: string | null;
  doacao: string | null;
  loc: string | null;
};

export default function MyInformations({
  email,
  insta,
  tel,
  doacao,
  loc,
}: InfoProps) {
  return (
    <div className="w-[90%] my-[2%] flex md:flex-row flex-col relative justify-evenly md:items-baseline items-center md:gap-0 flex-wrap">
      {email != null || insta != "" || tel != null ? (
        <div className="flex flex-col items-center w-[35%] gap-[10px] min-w-[250px] overflow-hidden my-[1%] md:border-0 border-t-2 border-[#274CB4]">
          <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">
            Redes Sociais
          </h1>
          {email != null ? (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-[10px] w-full md:justify-center"
              target="_blank"
            >
              <img src="Images/email.png" alt="" className="md:w-[10%] w-[15%]"/>
              <p className="font-bold md:text-[14px] text-[10px]">{email}</p>
            </a>
          ) : null}
          {insta != "" ? (
            <a
              href={insta}
              className="flex items-center gap-[10px] w-full md:justify-center"
              target="_blank"
            >
              <img src="Images/instagram.png" alt="" className="md:w-[10%] w-[15%]"/>
              <p className="font-bold md:text-[14px] text-[12px]">{insta}</p>
            </a>
          ) : null}
          {tel != null ? (
            <a
              href={`https://wa.me/${tel}`}
              className="flex items-center gap-[10px] w-full md:justify-center"
              target="_blank"
            >
              <img src="Images/whatsapp.png" alt="" className="md:w-[10%] w-[15%]"/>
              <p className="font-bold md:text-[14px] text-[12px]">{tel}</p>
            </a>
          ) : null}
        </div>
      ) : null}

      {doacao && (
        <div className="flex flex-col items-center w-[30%] gap-[10px] min-w-[250px] my-[1%] overflow-hidden md:border-0 border-t-2 border-[#274CB4]">
          <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">
            Doação
          </h1>
          <div className="flex items-center gap-[10px] w-full md:justify-center">
            <img src="Images/pix.png" alt="" className="md:w-[10%] w-[15%]"/>
            <p className="font-bold md:text-[14px] text-[12px]">{doacao}</p>
          </div>
        </div>
      )}

      {loc && (
        <div className="flex flex-col items-center w-[30%] gap-[10px] min-w-[250px] my-[1%] overflow-hidden md:border-0 border-t-2 border-[#274CB4]">
          <h1 className="font-bold md:text-[25px] text-[20px] mb-[1%]">
            Localização
          </h1>
          <div className="flex items-center gap-[10px] w-full md:justify-center">
            <img src="Images/marcador.png" alt="" className="md:w-[10%] w-[15%]"/>
            <p className="font-bold md:text-[14px] text-[12px]">{loc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
