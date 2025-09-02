import { useTheme } from "@rneui/themed";
import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  AnimatedCircularProgress,
  CircularProgress,
} from "react-native-circular-progress";
import { screenWidth } from "../../../../utils/functions/dimensions";

interface IBorder {}

const Border: FC<IBorder> = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <CircularProgress
        size={screenWidth - 90}
        width={12}
        fill={70}
        rotation={0}
        lineCap="round"
        backgroundColor={theme.colors.background}
        tintColor={theme.colors.accent2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ scaleX: -1 }],
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Border;
