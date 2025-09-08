import { Input, InputProps, makeStyles } from "@rneui/themed";
import { FC } from "react";

interface IAppInput extends InputProps {}

const AppInput: FC<IAppInput> = ({ ...props }) => {
  const styles = useStyles();
  return (
    <Input
      placeholderTextColor={"text2"}
      style={styles.input}
      labelStyle={styles.labelStyle}
      {...props}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  input: {
    color: theme.colors.text,
  },
  labelStyle: {
    color: "red",
  },
}));

export default AppInput;
