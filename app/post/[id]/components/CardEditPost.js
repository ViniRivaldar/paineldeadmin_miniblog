import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function CardEditPost({ post }) {
  return (
    <div className="relative w-[1192px] bg-[#D3D3D3] mt-10 mb-10 p-10 flex flex-col items-center gap-10 rounded">
      <div className="absolute top-7 left-10">
        <Link href='/'>
          <FaArrowLeft className='w-6 h-6 hover:text-white text-black' />
        </Link>
      </div>

      {post.fotos && post.fotos[0]?.url && (
        <Image
          src={post.fotos[0].url}
          alt="imagem do post"
          width={800}
          height={500}
          className="rounded"
        />
      )}

      <div>
        <h1 className="text-[#070D21] text-center font-anton text-[48px] font-normal leading-none">
          {post.title}
        </h1>
        <br />
        <p className="text-black font-openSans text-[16px] font-bold leading-none">
          Publicado em {new Date(post.createdAt).toLocaleDateString('pt-BR')}
        </p>
        <br />
        <div
          className="text-primary font-openSans text-[16px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}