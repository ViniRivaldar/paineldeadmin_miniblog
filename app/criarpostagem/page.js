import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function CriarPostagem(){
    return(
        <div className="w-[1192px] bg-[#D3D3D3]  mt-10 mb-10 p-10 rounded" >
            <Link href='/'
            >
                <FaArrowLeft className='w-6 h-6 hover:text-white'/>
            </Link>
            <form className="flex flex-col items-center gap-10">
                <h1 className="font-anton font-bold text-5xl text-black text-center mb-10"
                >
                    Crie sua postagem
                </h1>
                <input 
                placeholder="Titulo" 
                className='w-full border-2 border-black bg-[#D9D9D9] 
                focus:border-[#191970] focus:ring-1 focus:ring-[#191970]
                focus:shadow-[0_0_8px_#191970] 
                transition-all duration-200 ease-in-out
                outline-none p-2'
                />
                <textarea 
                placeholder="digite seu post" 
                className=" text-center w-full h-[800px] resize-none border-2 border-black bg-[#D9D9D9]
                focus:border-[#191970] focus:shadow-[0_0_5px_#191970] 
                outline-none p-10"
                />

                <button 
                className="w-[200px] h-[50px] bg-[#191970] p-5 text-white 
                flex items-center justify-center rounded 
                hover:bg-[#7B68EE] transition-all duration-300
                hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                    Criar
                </button>
            </form>
        </div>
    ) 
}