"use client";

import { useEffect, useState } from "react";
import Formulario from "../Components/Formulario";

export default function Login() {
  const [side, setSide] = useState("end");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mudar = () => {
    side === "start" ? setSide("end") : setSide("start");
  };

  const transformClass =
    side === "start"
      ? "-translate-y-full md:translate-y-0 md:-translate-x-full"
      : "translate-y-0 md:translate-y-0 md:translate-x-0";

  return (
    <div className="bg-[#274CB4] w-full h-screen flex items-center justify-center">
      <div className="bg-white flex xl:h-[80%] xl:w-[75%] lg:h-[70%] lg:w-[80%] md:h-[75%] md:w-[90%] sm:w-[80%] w-[95%] h-[95%] rounded-4xl shadow-xl/20 inset-shadow-2xs relative overflow-hidden">
        {/* Imagem */}
        <div
          className={`absolute md:w-[50%] md:h-[100%] w-[100%] h-[50%] rounded-4xl z-10 right-0 bottom-0
                    transform ${transformClass}
                    transition-transform duration-400 ease-in-out 
                    animate-float`}
        >
          <div className="relative w-full h-full">
            <img
              src="/Images/doacaoImg.png"
              alt=""
              className="w-full h-full object-cover rounded-4xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 bg-opacity-5 rounded-4xl flex items-center justify-center">
              <div className="flex items-center justify-center bg-white/30 w-[90%] h-[80%] rounded-4xl">
                <div className="flex items-center justify-center bg-white w-[80%] h-[80%] rounded-4xl">
                  <p className="text-center px-5 lg:text-base md:text-[12px] text-[11px]">
                    A plataforma visa dar voz à{" "}
                    <span className="text-[#274CB4] font-extrabold">
                      população
                    </span>
                    , permitindo que cidadãos{" "}
                    <span className="text-[#274CB4] font-extrabold">
                      relatem denúncias e questões que impactam a comunidade
                    </span>
                    . Como uma rede social, possibilita a publicação de relatos,
                    imagens e localizações.{" "}
                    <span className="text-[#274CB4] font-extrabold">
                      Instituições sociais{" "}
                    </span>
                    também podem{" "}
                    <span className="text-[#274CB4] font-extrabold">
                      divulgar serviços e formas de receber doações
                    </span>
                    , promovendo o engajamento comunitário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Formulário */}
        <Formulario onMudar={mudar}></Formulario>
      </div>
    </div>
  );
}
