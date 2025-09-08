import { FC } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../../../components/app-text";
import Layout from "./layout/layout";
import WheelNumber from "./wheel-number";

interface IPicker {
  value: string;
  type: "count" | "time";
  parentId?: string;
}

const Picker: FC<IPicker> = ({ value, type, parentId }) => {
  const values = value.split(":");
  console.log(values);
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <WheelNumber number={values[0]} parentId={parentId} type={type} />
        {values[1] && (
          <>
            <AppText type="number">:</AppText>
            <WheelNumber number={values[1]} parentId={parentId} type={type} />
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
