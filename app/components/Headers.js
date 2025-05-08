import Link from "next/link"
import{MdAccountCircle} from 'react-icons/md'

export default function Headers(){
    return(
        <div className="flex justify-center items-center">
            <div className="mr-[500px]">
                <Link href="#" className="text-white font-anton text-[29px] font-bold hover:text-black">
                    LOGO
                </Link>
            </div>
            <nav>
                <div className="relative group flex items-center gap-2">
                    <MdAccountCircle className="text-white w-10 h-10 rounded-full" />
                    <Link href='/perfil' className="text-white font-semibold hover:text-black cursor-pointer">Perfil</Link>
                    <div className="absolute hidden group-hover:block bg-white shadow-md right-0 mt-25 rounded-md">
                        <Link href="/perfil" className="block px-4 py-2 hover:bg-gray-100">Perfil</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}