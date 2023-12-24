import { create } from "zustand";

const userLoginStore = create((set) => ({
  loggedInUser: [],
  setLoggedInUser: (data) => set((state) => ({ loggedInUser: data })),
}));

export default userLoginStore;
