import { FlashList } from "@shopify/flash-list";
import { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TSetupItem } from "../../../services/types";
import SetupsItem from "./setups-item";
import AppSeparator from "../../../components/app-separator";

interface ISetupsList {}

const SetupsList: FC<ISetupsList> = () => {
  const keyExtractor = useCallback((item: TSetupItem) => item.id, []);
  const renderItem = useCallback(
    ({ item }: { item: TSetupItem }) => <SetupsItem item={item} />,
    [],
  );
  const SETUPS_DATA: TSetupItem[] = [
    {
      id: "rounds",
      title: "Раунды",
      canDisable: false,
      items: [
        {
          title: "Количество",
          type: "count",
          value: 3,
          minValue: 1,
          maxValue: 10,
        },
        {
          title: "Время",
          type: "time",
          value: "03:00",
          minValue: "00:10",
          maxValue: "03:00",
        },
      ],
    },
    {
      id: "preparation",
      title: "Подготовка",
      canDisable: false,
      items: [
        {
          title: "Время",
          type: "time",
          value: "00:20",
          minValue: "00:10",
          maxValue: "03:00",
        },
      ],
    },
    {
      id: "rest",
      title: "Отдых",
      canDisable: true,
      items: [
        {
          title: "Время",
          type: "time",
          value: "01:00",
          minValue: "00:10",
          maxValue: "03:00",
        },
      ],
    },
    {
      id: "explosion",
      title: "Взрыв",
      canDisable: true,
      items: [
        {
          title: "Количество",
          type: "count",
          value: 2,
          minValue: 1,
          maxValue: 9,
        },
        {
          title: "Время",
          type: "time",
          value: "01:00",
          minValue: "00:10",
          maxValue: "03:00",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <FlashList
        data={SETUPS_DATA}
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
