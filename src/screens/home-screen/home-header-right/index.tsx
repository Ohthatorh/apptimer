import { Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppIcon from "../../../components/app-icon";

interface IHomeHeaderRight {}

const HomeHeaderRight: FC<IHomeHeaderRight> = () => {
  const { theme } = useTheme();
  return (
    <Button type="clear" buttonStyle={styles.button}>
      <AppIcon name={"RotateCcw"} color={theme.colors.text2} />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 6,
  },
});

export default HomeHeaderRight;
