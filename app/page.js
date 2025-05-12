'use client'

import { useEffect, useState } from 'react';
import Link from "next/link";
import useAuthStore from '../store/authStore';
import CardPostagem from "./components/CardPostagem";
import { useRouter } from 'next/navigation';
import {FaArrowLeft} from 'react-icons/fa'

export default function Home() {
  const { listenForAuth, user } = useAuthStore();
  const [authInitialized, setAuthInitialized] = useState(false);
  const router = useRouter();
  const mainProjectUrl = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {    
    const cleanup = listenForAuth();
    setAuthInitialized(true);
    
    if (authInitialized) {
      const checkAuth = () => {
        if (!user || !user.admin) {
          router.push(mainProjectUrl);
        }
      };
      
      setTimeout(checkAuth, 500);
      const checkInterval = setInterval(checkAuth, 2000);
      
      return () => {
        cleanup();
        clearInterval(checkInterval);
      };
    }
    
    return cleanup;
  }, [listenForAuth, user, authInitialized, router, mainProjectUrl]);

  if (!user || !user.admin) {
    return (
      <div className="w-[1192px] bg-[#191970] mt-10 mb-10 p-10 rounded text-white">
        <h1 className="font-anton font-bold text-5xl mb-10 text-center">Painel Administrativo</h1>
        
        <div className="bg-yellow-500 text-black p-4 rounded mb-6 text-center">
          <p className="font-bold text-xl mb-2">Verificando permissões...</p>
          <p>Você será redirecionado automaticamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[1192px] bg-[#191970] mt-10 mb-10 p-10 rounded">
    
      <Link href={process.env.NEXT_PUBLIC_URL}>
        <FaArrowLeft className='w-6 h-6 text-white hover:text-black'/>
      </Link>
      <h1 className="font-anton font-bold text-5xl text-white text-center mb-10">Painel Administrativo</h1>
      
      <Link
        href='/criarpostagem'
        className="w-[200px] h-[50px] bg-[#D3D3D3] p-5 text-black
        flex items-center justify-center rounded 
        hover:bg-black hover:text-white transition-all duration-300
        hover:shadow-lg hover:-translate-y-1 cursor-pointer mb-5"
      >
        Criar Postagem
      </Link>
      
      <CardPostagem />
    </div>
  );
}