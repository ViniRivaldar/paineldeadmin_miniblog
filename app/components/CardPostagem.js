"use client"

import Link from "next/link"
import Image from "next/image"
import { FaTrash} from 'react-icons/fa'
import { useState, useEffect } from "react"

import { axiosPots } from "@/config/Axios"

export default function CardPostagem(){
    const [isPost, setIsPost] = useState([])

    useEffect(()=>{
        async function fecth (){
            const response = await axiosPots('/posts')
            setIsPost(response.data)
        } 

        fecth()
        
    },[])


    return (
    <>
      {isPost.map((post) => (
        <div
          key={post.id}
          className="flex flex-col gap-2 bg-[#D3D3D3] mb-10 p-10
            transition-all duration-300 hover:bg-[#c0c0c0] hover:shadow-lg 
            hover:-translate-y-1 rounded"
        >
          <Link href={`/post/${post.id}`} className="flex justify-center gap-10">
            {post.fotos && post.fotos[0]?.url && (
              <Image
                src={post.fotos[0].url}
                alt="imagem do post"
                width={499}
                height={153}
                className="rounded"
              />
            )}

            <div className="w-[499px] h-[153px] flex flex-col justify-center">
              <h1
                className="font-openSans text-primary text-center text-[32px] 
                  font-bold leading-[30px]"
              >
                {post.title}
              </h1>
            </div>
          </Link>

          <div className="flex justify-end">
           <button 
                className="p-2 bg-red-500 text-white rounded hover:bg-red-400 cursor-pointer"
            >
                <FaTrash size={20} />
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
