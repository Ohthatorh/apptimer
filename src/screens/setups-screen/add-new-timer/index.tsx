import { Input, makeStyles } from "@rneui/themed";
import { FC } from "react";
import AppText from "../../../components/app-text";
import AppButton from "../../../components/app-button";
import { View } from "react-native";
import AppInput from "../../../components/app-input";

interface IAddNewTimer {}

const AddNewTimer: FC<IAddNewTimer> = () => {
  const styles = useStyles();
  return (
    <View>
      <AppInput placeholder="Введите название таймера" />
      <AppButton buttonStyle={styles.button}>
        <AppText type="button" color="black">
          Добавить новый таймер
        </AppText>
      </AppButton>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 16,
    marginTop: "auto",
    backgroundColor: theme.colors.accent1,
    borderRadius: 16,
  },
}));

export default AddNewTimer;
