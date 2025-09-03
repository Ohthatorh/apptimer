import { JSX } from "react";
import { ViewStyle } from "react-native";

export type TIcon = {
  style?: ViewStyle;
};

export type TSportScreenItem = {
  code: string;
  title: string;
  description: string;
  icon: JSX.Element;
  onPress: () => void;
};
