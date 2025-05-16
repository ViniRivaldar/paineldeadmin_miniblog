'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import PostStore from '../../store/postStore'
import FotoPostStore from '../../store/fotoPostStore'
import RichEditor from "./components/RichEditor"

export default function CriarPostagem() {
  const router = useRouter()
  const { register, handleSubmit, reset, watch, setValue } = useForm()
  const { criarPost, loading, error, successMessage, clearStatus, clearLastCreatedPost } = PostStore()
  const { uploadAllTempImages, clearStatus: clearFotoStatus } = FotoPostStore()

  const onSubmit = async (data) => {
    clearStatus();
    clearFotoStatus();
    clearLastCreatedPost();

    const postCriado = await criarPost({
      title: data.title,
      content: data.content,
    });

    if (postCriado?.id) {
      await uploadAllTempImages(postCriado.id);
      router.push('/')
      reset();
    }
  };

  useEffect(() => {
    register('content', { required: true })
  }, [register])

  useEffect(() => {
    if (error || successMessage) {
      const timeout = setTimeout(() => {
        clearStatus();
        clearFotoStatus();
        clearLastCreatedPost();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [error, successMessage, clearStatus, clearFotoStatus, clearLastCreatedPost])

  return (
    <div className="w-[1192px] bg-[#D3D3D3] mt-10 mb-10 p-10 rounded">
      <Link href="/"><FaArrowLeft className="w-6 h-6 hover:text-white" /></Link>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-10">
        <h1 className="font-anton font-bold text-5xl text-black text-center mb-10">
          Crie sua postagem
        </h1>

        {error && <p className="text-red-600">{error}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <input
          placeholder="Titulo"
          {...register("title", { required: true })}
          className="w-full border-2 border-black bg-[#D9D9D9] focus:border-[#191970] focus:ring-1 focus:ring-[#191970] focus:shadow-[0_0_8px_#191970] transition-all duration-200 ease-in-out outline-none p-2"
        />
        <RichEditor
          value={watch('content')}
          onChange={(html) => setValue('content', html)}
        />

        <button
          type="submit"
          className={`w-[200px] h-[50px] bg-[#191970] p-5 text-white flex items-center justify-center rounded transition-all duration-300 ${loading ? 'bg-[#7B68EE] shadow-lg -translate-y-1' : 'hover:bg-[#7B68EE] hover:shadow-lg hover:-translate-y-1'} cursor-pointer disabled:opacity-50 disabled:pointer-events-none`}
        >
          {loading ? "Enviando..." : "Criar"}
        </button>
      </form>
    </div>
  )
}