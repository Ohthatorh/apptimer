import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppText from "../../../components/app-text";

interface IRoundInfo {}

const RoundInfo: FC<IRoundInfo> = () => {
  return (
    <View style={styles.container}>
      <AppText type="body2Up" color="text2">
        3 раунда
      </AppText>
      <View>
        <AppText type="body2Up" color="text2">
          Перерыв
        </AppText>
        <AppText type="body2Up" color="text2">
          01:00
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RoundInfo;
