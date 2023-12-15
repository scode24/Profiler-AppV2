import { create } from "zustand";

const profileStore = create((set) => ({
  profileJson: {},
  setProfileJson: (data) => set((state) => ({ profileJson: data })),
}));

export default profileStore;
