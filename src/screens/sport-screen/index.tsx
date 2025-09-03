import { FC, useCallback } from "react";
import { View } from "react-native";
import { useGlobalStyles } from "../../styles/global";
import SportItem from "./sport-item";
import { FlashList } from "@shopify/flash-list";
import {
  AddIcon,
  BoxIcon,
  KudoIcon,
  MmaIcon,
  SamboIcon,
  ThaiIcon,
} from "../../assets/icons";
import { TSportScreenItem } from "../../services/types";
import { useAppNavigation } from "../../services/hooks";

interface ISportScreen {}

const SportScreen: FC<ISportScreen> = () => {
  const { flex } = useGlobalStyles();
  const navigation = useAppNavigation();
  const DATA: TSportScreenItem[] = [
    {
      code: "newTimer",
      title: "Новый таймер",
      description: "Создать свой таймер",
      icon: <AddIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
    {
      code: "box",
      title: "Бокс",
      description: "12 раундов по 3 мин",
      icon: <BoxIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
    {
      code: "mma",
      title: "ММА",
      description: "3 раунда по 5 мин",
      icon: <MmaIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
    {
      code: "kudo",
      title: "Кудо",
      description: "3 раунда по 5 мин",
      icon: <KudoIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
    {
      code: "sambo",
      title: "Самбо",
      description: "3 раунда по 5 мин",
      icon: <SamboIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
    {
      code: "thai",
      title: "Тайский бокс",
      description: "3 раунда по 5 мин",
      icon: <ThaiIcon />,
      onPress: () => navigation.navigate("Setups"),
    },
  ];
  const keyExtractor = useCallback((item: TSportScreenItem) => item.code, []);
  const renderItem = useCallback(
    ({ item, index }: { item: TSportScreenItem; index: number }) => (
      <SportItem item={item} index={index} />
    ),
    [],
  );
  return (
    <View style={flex}>
      <FlashList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SportScreen;
