import { makeStyles } from "@rneui/themed";
import { FC } from "react";
import AppText from "../../../components/app-text";
import AppButton from "../../../components/app-button";

interface IAddNewTimer {}

const AddNewTimer: FC<IAddNewTimer> = () => {
  const styles = useStyles();
  return (
    <AppButton buttonStyle={styles.button}>
      <AppText type="button" color="black">
        Добавить новый таймер
      </AppText>
    </AppButton>
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
