import { makeStyles } from "@rneui/themed";
import { FC } from "react";
import AppText from "../../../../components/app-text";
import AppButton from "../../../../components/app-button";
import { useAppNavigation } from "../../../../services/hooks";

interface ISportItem {
  item: any;
  currentSport: string;
}

const SportItem: FC<ISportItem> = ({ item, currentSport }) => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const handlePress = () => {
    navigation.setParams({
      code: item.code,
    });
  };

  return (
    <AppButton
      onPress={handlePress}
      buttonStyle={[
        styles.chip,
        currentSport === item.code && styles.isChecked,
      ]}
      disabled={currentSport === item.code}>
      <AppText
        type="body2Up"
        color={currentSport === item.code ? "white" : "text2"}>
        {item.title}
      </AppText>
    </AppButton>
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
