import { FC } from "react";
import { StyleSheet, View } from "react-native";
import RoundSwitcher from "./round-switcher";
import { useGlobalStyles } from "../../styles/global";
import AppText from "../../components/app-text";
import RoundTimer from "./round-timer";
import RoundLabel from "./round-label";
import RoundInfo from "./round-info";

interface IHomeScreen {}

const HomeScreen: FC<IHomeScreen> = () => {
  const { container } = useGlobalStyles();
  return (
    <View style={[container, styles.container]}>
      <RoundInfo />
      <RoundTimer />
      <RoundLabel />
      <RoundSwitcher />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
