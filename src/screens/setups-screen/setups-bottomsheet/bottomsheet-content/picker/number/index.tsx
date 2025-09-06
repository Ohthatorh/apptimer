import WheelPicker from "@quidone/react-native-wheel-picker";
import { FC, useState } from "react";
import { StyleSheet } from "react-native";
import AppText from "../../../../../../components/app-text";

interface INumber {}
const data = [...Array(100).keys()].map((index) => ({
  value: index,
  label: index.toString(),
}));
const Number: FC<INumber> = () => {
  const [value, setValue] = useState(0);
  const renderNumberItem = ({ item }: { item: { label: string } }) => (
    <AppText type="number" style={styles.number}>
      {item.label}
    </AppText>
  );
  const onValueChange = ({ item: { value } }: { item: { value: number } }) =>
    setValue(value);

  return (
    <WheelPicker
      data={data}
      value={value}
      onValueChanged={onValueChange}
      enableScrollByTapOnItem={true}
      renderItem={renderNumberItem}
      overlayItemStyle={styles.overlayItemStyle}
      itemHeight={82}
      visibleItemCount={3}
    />
  );
};

const styles = StyleSheet.create({
  overlayItemStyle: {
    backgroundColor: "transparent",
  },
  number: {
    textAlign: "center",
  },
});

export default Number;
