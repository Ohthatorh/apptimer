import { makeStyles } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import { screenWidth } from "../../../utils/functions/dimensions";
import { GloveIcon } from "../../../assets/icons";
import Timer from "./timer";
import Explosion from "./explosion";
import Border from "./border";

interface IRoundTimer {}

const RoundTimer: FC<IRoundTimer> = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Border />
      <GloveIcon />
      <Timer />
      <Explosion />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: screenWidth - theme.spacing.lg * 2 - 12,
    height: screenWidth - theme.spacing.lg * 2 - 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    padding: 10,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: "100%",
  },
}));

export default RoundTimer;
