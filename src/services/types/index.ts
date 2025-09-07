import { ViewStyle } from "react-native";

export type TIcon = {
  style?: ViewStyle;
};

export type TSportsData = {
  code: string;
  title: string;
  description: string;
  icon: string;
  screen: string;
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
  parentTitle?: string;
};
