import { FlashList } from "@shopify/flash-list";
import { FC, useCallback } from "react";
import { StyleSheet } from "react-native";
import SportItem from "./sport-item";
import AppSeparator from "../../../components/app-separator";

interface ISportList {}

const SportList: FC<ISportList> = () => {
  const DATA: any[] = [
    {
      code: "newTimer",
      title: "+ таймер",
    },
    {
      code: "box",
      title: "Бокс",
      isChecked: true,
    },
    {
      code: "mma",
      title: "ММА",
    },
    {
      code: "kudo",
      title: "Кудо",
    },
    {
      code: "sambo",
      title: "Самбо",
    },
    {
      code: "thai",
      title: "Тайский бокс",
    },
  ];
  const keyExtractor = useCallback((item: any) => item.code, []);
  const renderItem = useCallback(
    ({ item }: { item: any }) => <SportItem item={item} />,
    [],
  );
  return (
    <FlashList
      data={DATA}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={() => <AppSeparator width={10} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
});

export default SportList;
