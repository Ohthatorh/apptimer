import { FC } from "react";
import { View } from "react-native";
import { useGlobalStyles } from "../../styles/global";
import SportItem from "./sport-item";
import { FlashList } from "@shopify/flash-list";
import { TSportsData } from "../../services/types";
import useSportsStore from "../../services/store/useSportsStore";
import { Button } from "@rneui/themed";

interface ISportScreen {}

const SportScreen: FC<ISportScreen> = () => {
  const { flex } = useGlobalStyles();
  const { sports, reset } = useSportsStore();
  const keyExtractor = (item: TSportsData) => item.code;
  const renderItem = ({
    item,
    index,
  }: {
    item: TSportsData;
    index: number;
  }) => <SportItem item={item} index={index} />;
  // console.log(sports);
  return (
    <View style={flex}>
      <Button onPress={reset}>asd</Button>
      <FlashList
        data={sports}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SportScreen;
