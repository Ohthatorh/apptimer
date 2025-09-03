import { Button, makeStyles } from "@rneui/themed";
import { FC } from "react";
import AppText from "../../../../components/app-text";

interface ISportItem {
  item: any;
}

const SportItem: FC<ISportItem> = ({ item }) => {
  const styles = useStyles();
  return (
    <Button
      type="clear"
      buttonStyle={[styles.chip, item.isChecked && styles.isChecked]}>
      <AppText type="body2Up" color={item.isChecked ? "white" : "text2"}>
        {item.title}
      </AppText>
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  chip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: theme.colors.backgroundSecondary,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  isChecked: {
    backgroundColor: theme.colors.accent2,
  },
}));

export default SportItem;
