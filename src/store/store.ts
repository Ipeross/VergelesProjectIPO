import { create } from "zustand";
import { Student } from "../entities/StudentEntity";
import { ApiService } from "../services/ApiService";
import { Pc } from "../entities/PcEntity";

type Store = {
  students: Student[];
  pcs: Pc[];
  loadStudents: () => Promise<void>;
  loadPcs: () => Promise<void>;
};

export const useStore = create<Store>((set) => ({
  students: [],
  pcs: [],

  loadStudents: async () => {
    const response = await ApiService.getStudents();
    if (Array.isArray(response)) {
      set({ students: response });
    }
  },

  loadPcs: async () => {
    const response = await ApiService.getPcs();
    if (Array.isArray(response)) {
      set({ pcs: response });
    }
  }
}));