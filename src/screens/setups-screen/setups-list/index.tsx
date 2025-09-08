import { FlashList } from "@shopify/flash-list";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TSetupItem } from "../../../services/types";
import SetupsItem from "./setups-item";
import AppSeparator from "../../../components/app-separator";
import useSportsStore from "../../../services/store/useSportsStore";

interface ISetupsList {
  currentSport: string;
}

const SetupsList: FC<ISetupsList> = ({ currentSport }) => {
  const { sports } = useSportsStore();
  const currentSportData = sports.find((item) => item.code === currentSport);
  const keyExtractor = (item: TSetupItem) => item.id;

  const renderItem = ({ item }: { item: TSetupItem }) => (
    <SetupsItem setupItem={item} currentSport={currentSport} />
  );
  return (
    <View style={styles.container}>
      <FlashList
        data={currentSportData?.setups || []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <AppSeparator height={10} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SetupsList;
