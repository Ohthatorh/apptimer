import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../../../components/app-text";
import Layout from "./layout/layout";
import WheelNumber from "./wheel-number";

interface IPicker {
  value: string;
  type: "count" | "time";
  onValuesChange: (values: string[]) => void;
  parentId?: string;
}

const Picker: FC<IPicker> = ({ value, type, parentId, onValuesChange }) => {
  const values = value.split(":");
  const [firstValue, setFirstValue] = useState(values[0]);
  const [secondValue, setSecondValue] = useState(values[1] || "");

  const handleFirstValueChange = (value: string) => {
    const newValue = value.toString();
    setFirstValue(newValue);
    const values = [newValue];
    if (secondValue) values.push(secondValue);
    onValuesChange(values);
  };

  const handleSecondValueChange = (value: string) => {
    const newValue = value.toString();
    setSecondValue(newValue);
    const values = [];
    if (firstValue) values.push(firstValue);
    values.push(newValue);
    onValuesChange(values);
  };
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <WheelNumber
          number={values[0]}
          parentId={parentId}
          type={type}
          onValueChange={handleFirstValueChange}
        />
        {values[1] && (
          <>
            <AppText type="number">:</AppText>
            <WheelNumber
              number={values[1]}
              parentId={parentId}
              type={type}
              onValueChange={handleSecondValueChange}
            />
          </>
        )}
      </View>
      <Layout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 80,
    zIndex: 1,
  },
  numberContainer: {
    paddingHorizontal: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    zIndex: 2,
    position: "relative",
  },
});
export default Picker;
