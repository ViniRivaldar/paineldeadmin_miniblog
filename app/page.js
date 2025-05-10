import CardPostagem from "./components/CardPostagem";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[1192px] bg-[#191970] mt-10 mb-10 p-10 rounded">
      <h1 className="font-anton font-bold text-5xl text-white text-center mb-10"> Postagens </h1>
      <Link href='/criarpostagem'>CriarPostagem</Link>
      <CardPostagem/>
    </div>
  );
}
