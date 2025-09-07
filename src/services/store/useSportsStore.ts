import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TSetupItem, TSportsData } from "../types";
import { DEFAULT_SPORTS_DATA } from "./defaultSports";

interface ISportsStore {
  _isHydrated: boolean;
  setHydrated: () => void;
  sports: TSportsData[];
  // addNewSetup: (setup: TSetupItem) => void;
  // removeSetup: (setup: TSetupItem) => void;
  reset: () => void;
}

const useSportsStore = create<ISportsStore>()(
  persist(
    (set, get, store) => ({
      _isHydrated: false,
      setHydrated: () => set({ _isHydrated: true }),
      sports: DEFAULT_SPORTS_DATA,
      reset: () => {
        set(store.getInitialState());
      },
      // addNewSetup: (setup) =>
      //   set((state) => ({
      //     setups: [...state.setups, setup],
      //   })),

      // removeSetup: (setup) =>
      //   set((state) => ({
      //     setups: state.setups.filter((set) => set !== setup),
      //   })),
    }),
    {
      name: "apptimer-useSportsStore",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated();
        }
      },
    },
  ),
);

export default useSportsStore;
