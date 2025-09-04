import { FC, useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TSetupItem, TSetupListItem } from "../../../../services/types";
import { Button, makeStyles, Switch } from "@rneui/themed";
import AppText from "../../../../components/app-text";
import { SlidersVerticalIcon } from "../../../../assets/icons";
import AppButton from "../../../../components/app-button";
import { FlashList } from "@shopify/flash-list";
import AppSeparator from "../../../../components/app-separator";

interface ISetupsItem {
  item: TSetupItem;
}

const SetupsItem: FC<ISetupsItem> = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const styles = useStyles();
  const keyExtractor = useCallback((item: TSetupListItem) => item.title, []);
  const renderItem = useCallback(
    ({ item }: { item: TSetupListItem }) => (
      <AppButton>
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
        <AppText type="body1Up">{item.title}</AppText>
        {item.canDisable && (
          <Switch
            color="accent1"
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
        )}
      </View>
      asd
      {checked && (
        <FlashList
          data={item.items}
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
