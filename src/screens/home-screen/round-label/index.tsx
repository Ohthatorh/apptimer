import { FC } from "react";
import { StyleSheet } from "react-native";
import AppText from "../../../components/app-text";

interface IRoundLabel {}

const RoundLabel: FC<IRoundLabel> = () => {
  return (
    <AppText type="body1Up" style={styles.roundText} color="white">
      Раунд 1
    </AppText>
  );
};

const styles = StyleSheet.create({
  roundText: {
    textAlign: "center",
  },
});

export default RoundLabel;
