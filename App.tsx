/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ActivityIndicator } from "react-native";
import AppProvider from "./src/components/app-provider";
import useSetupsStore from "./src/services/store/useSetupsStore";

function App() {
  const { _isHydrated } = useSetupsStore();

  if (!_isHydrated) return <ActivityIndicator />;

  return <AppProvider />;
}

export default App;
