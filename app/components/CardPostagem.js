import Link from "next/link"
import Image from "next/image"
import { FaTrash, FaEdit } from 'react-icons/fa'

export default function CardPostagem(){
    return(
        <div className="flex flex-col gap-2 bg-[#D3D3D3] mb-10 p-10
            transition-all duration-300 hover:bg-[#c0c0c0] hover:shadow-lg 
            hover:-translate-y-1 rounded"
        >

            <Link href='./post/1' className="flex justify-center gap-10">
                <Image
                src='/download.jpg'
                alt="imagen"
                width={499}
                height={153}
                />
                <div className="w-[499px] h-[153px] flex flex-col">
                    <h1 className="font-openSans text-primary text-center text-[32px] 
                        font-bold leading-[30px] mb-5"
                    >
                        Treino do Corinthians: Memphis volta a trabalhar 
                        com bola e pode ser reforço contra o Inter
                    </h1>

                    <p className="font-openSans text-primary text-[16px] font-normal">
                        Atacante é liberado para treinar com o restante 
                        do grupo depois de se recuperar dos traumas sofridos 
                        no pé direito e perna direita; Gustavo Henrique 
                        passará por cirurgia e é baixa
                    </p>
                </div>
            </Link>

            <div className="flex justify-end gap-2">
                <button 
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400 cursor-pointer"
                >
                <FaEdit size={20} />
                </button>
                <button 
                className="p-2 bg-red-500 text-white rounded hover:bg-red-400 cursor-pointer"
                >
                <FaTrash size={20} />
                </button>
            </div>
        </div>
        
    )
}
