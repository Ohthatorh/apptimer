import { Button } from "@rneui/themed";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { SlidersVerticalIcon } from "../../../assets/icons";

interface IHomeHeaderLeft {}

const HomeHeaderLeft: FC<IHomeHeaderLeft> = () => {
  return (
    <Button type="clear" buttonStyle={styles.button}>
      <SlidersVerticalIcon />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 6,
  },
});

export default HomeHeaderLeft;
