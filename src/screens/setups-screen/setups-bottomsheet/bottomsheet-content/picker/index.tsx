import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Number from "./number";
import AppText from "../../../../../components/app-text";
import { makeStyles } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";
import Layout from "./layout/layout";

interface IPicker {}

const Picker: FC<IPicker> = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Number />
        <AppText type="number">:</AppText>
        <Number />
      </View>
      <Layout />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

export default Picker;
