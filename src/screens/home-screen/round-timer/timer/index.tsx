import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppText from "../../../../components/app-text";

interface ITimer {}

const Timer: FC<ITimer> = () => {
  return <AppText style={styles.text}>00:20</AppText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 82,
  },
});

export default Timer;
