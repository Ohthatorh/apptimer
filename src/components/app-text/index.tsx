import { Colors, TextProps, Theme, useTheme } from "@rneui/themed";
import { FC, ReactNode } from "react";
import { Text } from "@rneui/themed";

interface IAppText extends Omit<TextProps, "type"> {
  type?: keyof Theme["text"];
  color?: keyof Colors;
  children: ReactNode;
}
const AppText: FC<IAppText> = ({ type, style, color, children, ...props }) => {
  const { theme } = useTheme();
  const findedType = theme.text[type!] || theme.text.default;
  const findedColor: any = {
    color: theme.colors[color!] || theme.colors.text,
  };
  return (
    <Text style={[findedType, findedColor, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
