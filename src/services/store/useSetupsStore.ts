import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TSetupItem, TSetupListItem } from "../types";
import { DEFAULT_SETUPS_DATA } from "./defaultSetups";

interface ISetupsStore {
  _isHydrated: boolean;
  setHydrated: () => void;
  setups: TSetupItem[];
  addNewSetup: (setup: TSetupItem) => void;
  removeSetup: (setup: TSetupItem) => void;
  reset: () => void;
}

const useSetupsStore = create<ISetupsStore>()(
  persist(
    (set, get, store) => ({
      _isHydrated: false,
      setHydrated: () => set({ _isHydrated: true }),
      setups: DEFAULT_SETUPS_DATA,
      reset: () => {
        set(store.getInitialState());
      },
      addNewSetup: (setup) =>
        set((state) => ({
          setups: [...state.setups, setup],
        })),

      removeSetup: (setup) =>
        set((state) => ({
          setups: state.setups.filter((set) => set !== setup),
        })),
    }),
    {
      name: "apptimer-useSetupsStore",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated();
        }
      },
    },
  ),
);

export default useSetupsStore;
