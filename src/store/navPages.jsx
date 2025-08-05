import { create } from "zustand"

export const useNavPage = create((set) => ({
  page: 0,
  changePage: (index) => set((state) => ({ page: state.page = index }))
}))