import { ThemeProvider } from "@rneui/themed";
import { FC } from "react";
import AppNavigator from "../app-navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appTheme } from "../../styles/app-theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

interface IAppProvider {}

const AppProvider: FC<IAppProvider> = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={appTheme}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;
