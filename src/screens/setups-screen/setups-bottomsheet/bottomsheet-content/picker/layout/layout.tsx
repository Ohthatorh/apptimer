import { makeStyles } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface ILayout {}

const Layout: FC<ILayout> = () => {
  const styles = useStyles();
  return (
    <View style={styles.layout}>
      {/* Основная тень */}
      <LinearGradient
        colors={[
          "rgba(12, 12, 13, 0.4)",
          "rgba(12, 12, 13, 0.2)",
          "transparent",
        ]}
        locations={[0, 0.5, 1]}
        style={styles.mainShadow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Дополнительная тень для боков */}
      <LinearGradient
        colors={[
          "rgba(12, 12, 13, 0.3)",
          "rgba(12, 12, 13, 0.15)",
          "transparent",
        ]}
        locations={[0, 0.5, 1]}
        style={styles.sidesShadow}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    position: "absolute",
    top: "50%",
    left: 20,
    right: 20,
    transform: [{ translateY: -41 }],
    height: 82,
    backgroundColor: theme.colors.background,
    borderRadius: 40,
    overflow: "hidden",
  },
  mainShadow: {
    position: "absolute",
    top: -16,
    left: -16,
    right: -16,
    bottom: -16,
    borderRadius: 56,
  },
  sidesShadow: {
    position: "absolute",
    top: -16,
    left: -16,
    right: -16,
    bottom: -16,
    borderRadius: 56,
    opacity: 0.8,
  },
}));

export default Layout;
