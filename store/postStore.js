import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosPots } from "@/config/Axios";
import useAuthStore from "./authStore";

const PostStore = create(
    persist(
        (set,get)=>({
            loading: false,
            error: null,
            successMessage: null,

            criarPost: async({ title, content })=>{
                const {user} = useAuthStore.getState()

                if(!user || !user.token) return set({ error: "Usuário não autenticado." });

                if(!user.admin) return set({error: "Sem permissão para fazer isso"})

                set({loading: true, error: null, successMessage: null} )

                try{
                    const response = await axiosPots.post('/posts',{
                        title,
                        content,
                        user_id: user.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    })

                    set({successMessage:"Post criado com sucesso!"})

                }catch(err){
                    const message = "Erro ao criar o post."
                    console.error("Erro técnico ao criar post:", err);

                    set({error:message})
                }finally {
                    set({ loading: false });
                }

            },

            clearStatus: () => set({ error: null, successMessage: null }),

        }),
        {
            name: "post-store",
            getStorage: () => localStorage,
        }
    )
)

export default PostStore