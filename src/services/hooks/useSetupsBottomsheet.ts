import { useContext } from "react";
import { BottomsheetContext } from "../../screens/setups-screen/setups-bottomsheet";

const useSetupsBottomsheet = () => {
  const context = useContext(BottomsheetContext);
  return context;
};

export default useSetupsBottomsheet;
