export default function Loading() {
    return (
        <div className="bg-[#274CB4] w-full h-screen flex items-center justify-center">
            <div className="bg-white w-[60%] h-[50%] sm:h-[75%] flex items-center justify-center rounded-3xl shadow-xl/20 inset-shadow-2xs">
                <div className="w-20 sm:w-50 aspect-square border-8 border-t-[10px] border-white border-t-[#274CB4] rounded-full animate-spin"></div>
            </div>
        </div>
    )
}
