import { Button, ButtonProps } from "@rneui/themed";
import { FC } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface IAppButton extends Omit<ButtonProps, "buttonStyle"> {
  buttonStyle?: StyleProp<ViewStyle>;
}

const AppButton: FC<IAppButton> = ({
  children,
  buttonStyle,
  type,
  ...props
}) => {
  return (
    <Button
      buttonStyle={[styles.button, buttonStyle]}
      type={type || "clear"}
      {...props}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 0,
    paddingHorizontal: 0,
  },
});

export default AppButton;
