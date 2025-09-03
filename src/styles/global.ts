import { StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";

export const useGlobalStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing?.lg || 16,
    },
    flex: {
      flex: 1,
    },
  });
};

export const global = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
