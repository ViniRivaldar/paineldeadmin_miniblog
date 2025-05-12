import Link from "next/link"
import{MdAccountCircle} from 'react-icons/md'

export default function Headers(){
    return(
        <div className="flex justify-center items-center">
            <nav>
                <Link href="https://miniature-yodel-pjjjwpgv99xjh7564-3000.app.github.dev/" className="text-white font-anton text-[29px] font-bold hover:text-black">
                    LOGO
                </Link>
            </nav>
        </div>
    )
}