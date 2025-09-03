import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<ParamListBase>>();

export default useAppNavigation;
