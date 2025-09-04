import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import SportList from "./sport-list";
import { useGlobalStyles } from "../../styles/global";
import SetupsList from "./setups-list";
import AddNewTimer from "./add-new-timer";

interface ISetupsScreen {}

const SetupsScreen: FC<ISetupsScreen> = () => {
  const { container } = useGlobalStyles();
  return (
    <View style={styles.container}>
      <SportList />
      <View style={container}>
        <SetupsList />
        <AddNewTimer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
});

export default SetupsScreen;
