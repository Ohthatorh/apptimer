/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ActivityIndicator } from "react-native";
import AppProvider from "./src/components/app-provider";
import useSportsStore from "./src/services/store/useSportsStore";

function App() {
  const { _isHydrated } = useSportsStore();

  if (!_isHydrated) return <ActivityIndicator />;

  return <AppProvider />;
}

export default App;
