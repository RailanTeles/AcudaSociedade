"use client";
type FormularioProps = {
    onMudar: () => void;
}

export default function Formulario( { onMudar } : FormularioProps){
    return(
        <div className="w-full h-full flex">
            {/* Login */}
            <div className="sm:w-[50%] sm:h-full w-full h-[50%] flex flex-col items-center sm:py-[2%] py-[10%]">
                <div className="flex items-center justify-evenly h-[20%]">
                    <img src="Images/AS-logo.png" alt="" className="w-[18%]" />
                    <h1 className="text-4xl text-center">
                        <span className="text-[#274CB4] font-bold">Acuda </span>
                        <br />
                        <span className="text-[#F9C118] font-bold">Sociedade</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}