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

export type TSetupItem = {
  id: string;
  title: string;
  canDisable: boolean;
  items: TSetupListItem[];
};

export type TSetupListItem = {
  value: string | number;
  minValue: string | number;
  maxValue: string | number;
  type: "time" | "count";
  title: string;
};
