import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TSetupItem, TSetupListItem, TSportsData } from "../types";
import { DEFAULT_SPORTS_DATA } from "./defaultSports";

interface ISportsStore {
  _isHydrated: boolean;
  setHydrated: () => void;
  sports: TSportsData[];
  editSetup: (setup: TSetupListItem) => void;
  toggleSwitch: (
    parentCode: string,
    toggleId: string,
    isToggle: boolean,
  ) => void;
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
      editSetup: (setup) => {
        set((state) => ({
          sports: state.sports.map((sport) => {
            if (sport.code == setup.currentSport) {
              return {
                ...sport,
                setups: sport.setups.map((setupItem) => {
                  if (setupItem.id == setup.parentId) {
                    return {
                      ...setupItem,
                      items: setupItem.items.map((item) => {
                        if (item.title == setup.title) {
                          return {
                            ...item,
                            value: setup.value,
                          };
                        }
                        return item;
                      }),
                    };
                  }
                  return setupItem;
                }),
              };
            }
            return sport;
          }),
        }));
      },
      toggleSwitch: (parentCode, toggleId, isToggle) => {
        set((state) => ({
          sports: state.sports.map((sport) => {
            if (sport.code == parentCode) {
              return {
                ...sport,
                setups: sport.setups.map((setup) => {
                  if (setup.id == toggleId) {
                    return {
                      ...setup,
                      items: isToggle
                        ? DEFAULT_SPORTS_DATA.find(
                            (s) => s.code == parentCode,
                          )?.setups?.find((s) => s.id == toggleId)?.items!
                        : [],
                    };
                  }
                  return setup;
                }),
              };
            }
            return sport;
          }),
        }));
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
