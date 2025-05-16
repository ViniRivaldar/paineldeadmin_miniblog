import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosPots } from "@/config/Axios";
import useAuthStore from "./authStore";

const FotoPostStore = create(
  persist(
    (set, get) => ({
      tempImages: [],
      loading: false,
      error: null,
      successMessage: null,

      addTempImage: (file) => {
        if (!(file instanceof File)) return null;
        const tempURL = URL.createObjectURL(file);
        set((state) => ({
          tempImages: [...state.tempImages, { file, tempURL }],
        }));
        return tempURL;
      },

      uploadAllTempImages: async (postId) => {
        const { user } = useAuthStore.getState();
        const { tempImages } = get();

        if (!user?.token) {
          set({ error: "Usuário não autenticado." });
          return;
        }

        set({ loading: true, error: null });

        try {
          const uploadPromises = tempImages.map(({ file }) => {
            if (!(file instanceof File)) return Promise.resolve();
            
            const formData = new FormData();
            formData.append("foto_post", file);
            formData.append("post_id", postId);

            return axiosPots.post("/fotopost", formData, {
              headers: { Authorization: `Bearer ${user.token}` },
            });
          });
          
          await Promise.all(uploadPromises);
          set({
            successMessage: "Todas as imagens foram enviadas com sucesso!",
            tempImages: [],
          });
        } catch (err) {
          set({ error: "Falha ao enviar imagens." });
        } finally {
          set({ loading: false });
        }
      },

      clearStatus: () => set({ error: null, successMessage: null }),
    }),
    {
      name: "foto-post-store",
      getStorage: () => localStorage,
    }
  )
);

export default FotoPostStore;