import WheelPicker from "@quidone/react-native-wheel-picker";
import { FC, useState } from "react";
import { StyleSheet } from "react-native";
import AppText from "../../../../../../components/app-text";
import { MIN_MAX_VALUES } from "../../../../../../services/helpers/minmax-values";

interface IWheelNumber {
  number: string;
  parentId?: string;
}

const WheelNumber: FC<IWheelNumber> = ({ number, parentId }) => {
  const [value, setValue] = useState(Number(number));
  const minValue = MIN_MAX_VALUES[parentId!]?.min || MIN_MAX_VALUES.time.min;
  const maxValue = MIN_MAX_VALUES[parentId!]?.max || MIN_MAX_VALUES.time.max;

  const data = Array.from({ length: Number(maxValue) }, (_, index) => {
    const value = Number(minValue) + index;
    return { label: value.toString(), value: value };
  });

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

export default WheelNumber;
