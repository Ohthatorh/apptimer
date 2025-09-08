import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SportList from "./sport-list";
import { useGlobalStyles } from "../../styles/global";
import SetupsList from "./setups-list";
import AddNewTimer from "./add-new-timer";
import SetupsBottomsheet from "./setups-bottomsheet";

interface ISetupsScreen {
  route: any;
}

const SetupsScreen: FC<ISetupsScreen> = ({ route }) => {
  const currentSport = route.params.code;
  const { container } = useGlobalStyles();
  return (
    <SetupsBottomsheet>
      <View style={styles.container}>
        <SportList currentSport={currentSport} />
        <View style={container}>
          {currentSport === "newTimer" ? (
            <AddNewTimer />
          ) : (
            <SetupsList currentSport={currentSport} />
          )}
        </View>
      </View>
    </SetupsBottomsheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
});

export default SetupsScreen;
