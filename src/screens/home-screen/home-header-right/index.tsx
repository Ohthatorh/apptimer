import { Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppIcon from "../../../components/app-icon";
import AppButton from "../../../components/app-button";

interface IHomeHeaderRight {}

const HomeHeaderRight: FC<IHomeHeaderRight> = () => {
  const { theme } = useTheme();
  return (
    <AppButton buttonStyle={styles.button}>
      <AppIcon name="RotateCcw" color={theme.colors.text2} />
    </AppButton>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 6,
  },
});

export default HomeHeaderRight;
