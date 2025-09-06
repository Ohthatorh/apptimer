import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TSetupListItem } from "../../../../services/types";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import AppText from "../../../../components/app-text";
import { makeStyles } from "@rneui/themed";
import AppButton from "../../../../components/app-button";

interface IBottomsheetContent {
  item: TSetupListItem;
}

const BottomsheetContent: FC<IBottomsheetContent> = ({ item }) => {
  console.log(item);
  return (
    <BottomSheetView style={styles.contentContainer}>
      <AppText type="body1Up" style={styles.title}>
        {item.parentTitle} : {item.title}
      </AppText>
      <AppButton buttonStyle={styles.button}>
        <AppText type="button" color="accent1">
          Сохранить
        </AppText>
      </AppButton>
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: 80,
  },
  button: {
    marginBottom: 32,
  },
});

export default BottomsheetContent;
