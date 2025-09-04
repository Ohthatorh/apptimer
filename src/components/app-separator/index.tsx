import { FC } from "react";
import { View } from "react-native";

interface IAppSeparator {
  width?: number;
  height?: number;
}

const AppSeparator: FC<IAppSeparator> = ({ width, height }) => {
  return <View style={{ width: width, height: height }} />;
};

export default AppSeparator;
