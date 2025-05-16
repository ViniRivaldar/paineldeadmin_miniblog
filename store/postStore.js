import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosPots } from "@/config/Axios";
import useAuthStore from "./authStore";

const PostStore = create(
  persist(
    (set, get) => ({
      loading: false,
      error: null,
      successMessage: null,
      lastCreatedPost: null,

      criarPost: async ({ title, content }) => {
        const { user } = useAuthStore.getState();

        if (!user || !user.token) {
          set({ error: "Usuário não autenticado." });
          return null;
        }

        if (!user.admin) {
          set({ error: "Sem permissão para fazer isso" });
          return null;
        }

        set({ loading: true, error: null, successMessage: null, lastCreatedPost: null });

        try {
          const response = await axiosPots.post(
            "/posts",
            {
              title,
              content,
              user_id: user.id,
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

          set({
            successMessage: "Post criado com sucesso!",
            lastCreatedPost: response.data.post,
          });

          return response.data.post;
        } catch (err) {
          console.error("Erro técnico ao criar post:", err);
          set({ error: "Erro ao criar o post." });
          return null;
        } finally {
          set({ loading: false });
        }
      },

      clearStatus: () => set({ error: null, successMessage: null }),

      clearLastCreatedPost: () => set({ lastCreatedPost: null }),
    }),
    {
      name: "post-store",
      getStorage: () => localStorage,
    }
  )
);

export default PostStore;