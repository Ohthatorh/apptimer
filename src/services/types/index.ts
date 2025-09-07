import { ViewStyle } from "react-native";

export type TIcon = {
  style?: ViewStyle;
};

export type TSportsData = {
  code: string;
  title: string;
  description: string;
  icon: string;
  setups: TSetupItem[];
};

export type TSetupItem = {
  id: string;
  title: string;
  canDisable: boolean;
  items: TSetupListItem[];
};

export type TSetupListItem = {
  value: string;
  title: string;
  parentTitle?: string;
  parentId?: string;
};
