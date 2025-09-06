import { FC, useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TSetupItem, TSetupListItem } from "../../../../services/types";
import { Button, makeStyles, Switch } from "@rneui/themed";
import AppText from "../../../../components/app-text";
import { SlidersVerticalIcon } from "../../../../assets/icons";
import AppButton from "../../../../components/app-button";
import { FlashList } from "@shopify/flash-list";
import AppSeparator from "../../../../components/app-separator";
import { useSetupsBottomsheet } from "../../../../services/hooks/useSetupsBottomsheet";

interface ISetupsItem {
  setupItem: TSetupItem;
}

const SetupsItem: FC<ISetupsItem> = ({ setupItem }) => {
  const [showSetups, setShowSetups] = useState(!!setupItem.items.length);
  const styles = useStyles();
  const keyExtractor = useCallback((item: TSetupListItem) => item.title, []);
  const bottomSheet = useSetupsBottomsheet();
  const renderItem = useCallback(
    ({ item }: { item: TSetupListItem }) => (
      <AppButton
        onPress={() =>
          bottomSheet?.openModal({ ...item, parentTitle: setupItem.title })
        }>
        <View style={styles.buttonTexts}>
          <AppText type="h1">{item.value}</AppText>
          <AppText type="body2Up" color="text2">
            {item.title}
          </AppText>
        </View>
        <SlidersVerticalIcon />
      </AppButton>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText type="body1Up">{setupItem.title}</AppText>
        {setupItem.canDisable && (
          <Switch
            color="accent1"
            value={showSetups}
            onValueChange={(value) => setShowSetups(value)}
          />
        )}
      </View>
      {showSetups && (
        <FlashList
          data={setupItem.items}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => <AppSeparator height={10} />}
        />
      )}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: theme.colors.backgroundSecondary,
    gap: 8,
  },
  buttonTexts: {
    flex: 1,
    paddingHorizontal: 12,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: theme.colors.background,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default SetupsItem;
