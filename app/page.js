import CardPostagem from "./components/CardPostagem";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[1192px] bg-[#191970] mt-10 mb-10 p-10 rounded">
      <h1 className="font-anton font-bold text-5xl text-white text-center mb-10"> Postagens </h1>
      <Link 
        href='/criarpostagem' 
        className="w-[200px] h-[50px] bg-[#D3D3D3] p-5 text-black
        flex items-center justify-center rounded 
        hover:bg-black hover:text-white transition-all duration-300
        hover:shadow-lg hover:-translate-y-1 cursor-pointer mb-5"
      >
        Criar Postagem
      </Link>
      <CardPostagem/>
    </div>
  );
}
