import { FC, useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { TSetupListItem } from "../../../../services/types";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import AppText from "../../../../components/app-text";
import AppButton from "../../../../components/app-button";
import Picker from "./picker";
import useSportsStore from "../../../../services/store/useSportsStore";

interface IBottomsheetContent {
  item: TSetupListItem;
  onClose: () => void;
}

const BottomsheetContent: FC<IBottomsheetContent> = ({ item, onClose }) => {
  const { editSetup } = useSportsStore();
  const [currentValues, setCurrentValues] = useState<string[]>(
    item.value.split(":"),
  );
  const handleValuesChange = (values: string[]) => {
    setCurrentValues(values);
  };
  const handleSave = () => {
    const data = {
      ...item,
      value: currentValues.join(":"),
    };
    editSetup(data);
    onClose();
  };
  return (
    <BottomSheetView style={styles.contentContainer}>
      <AppText type="body1Up" style={styles.title}>
        {item.parentTitle} : {item.title}
      </AppText>
      <Picker
        value={item.value}
        parentId={item.parentId}
        type={item.type}
        onValuesChange={handleValuesChange}
      />
      <AppButton buttonStyle={styles.button}>
        <AppText type="button" color="accent1" onPress={handleSave}>
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
    padding: 30,
  },
});

export default BottomsheetContent;
