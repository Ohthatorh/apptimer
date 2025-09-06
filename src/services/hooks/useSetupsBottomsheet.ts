import { useContext } from "react";
import { BottomsheetContext } from "../../screens/setups-screen/setups-bottomsheet";

export const useSetupsBottomsheet = () => {
  const context = useContext(BottomsheetContext);
  return context;
};
