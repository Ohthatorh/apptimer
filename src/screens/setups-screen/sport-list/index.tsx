import { FlashList } from "@shopify/flash-list";
import { FC, useCallback } from "react";
import { StyleSheet } from "react-native";
import SportItem from "./sport-item";
import AppSeparator from "../../../components/app-separator";
import useSportsStore from "../../../services/store/useSportsStore";
import { TSportsData } from "../../../services/types";

interface ISportList {
  currentSport: string;
}

const SportList: FC<ISportList> = ({ currentSport }) => {
  const { sports } = useSportsStore();
  const keyExtractor = useCallback((item: TSportsData) => item.code, []);
  const renderItem = useCallback(
    ({ item }: { item: TSportsData }) => (
      <SportItem item={item} currentSport={currentSport} />
    ),
    [currentSport],
  );
  return (
    <FlashList
      data={sports}
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
