import { Button } from "@rneui/themed";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { SlidersVerticalIcon } from "../../../assets/icons";
import AppButton from "../../../components/app-button";

interface IHomeHeaderLeft {}

const HomeHeaderLeft: FC<IHomeHeaderLeft> = () => {
  return (
    <AppButton buttonStyle={styles.button}>
      <SlidersVerticalIcon />
    </AppButton>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 6,
  },
});

export default HomeHeaderLeft;
