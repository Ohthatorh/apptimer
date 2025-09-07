import { FC, JSX } from "react";
import { View } from "react-native";
import AppText from "../../../components/app-text";
import {
  AddIcon,
  BoxIcon,
  CustomSportIcon,
  KudoIcon,
  MmaIcon,
  SamboIcon,
  SlidersVerticalIcon,
  ThaiIcon,
} from "../../../assets/icons";
import { makeStyles } from "@rneui/themed";
import { TSportsData } from "../../../services/types";
import AppButton from "../../../components/app-button";
import { useAppNavigation } from "../../../services/hooks";

interface ISportItem {
  item: TSportsData;
  index: number;
}

const ICONS: Record<string, JSX.Element> = {
  addIcon: <AddIcon />,
  boxIcon: <BoxIcon />,
  mmaIcon: <MmaIcon />,
  kudoIcon: <KudoIcon />,
  samboIcon: <SamboIcon />,
  thaiIcon: <ThaiIcon />,
  anotherIcon: <CustomSportIcon />,
};

const SportItem: FC<ISportItem> = ({ item, index }) => {
  const navigation = useAppNavigation();
  const styles = useStyles({ item, index });
  const handleNavigate = () =>
    navigation.navigate("Setups", { code: item.code });
  return (
    <AppButton buttonStyle={styles.button} onPress={handleNavigate}>
      <View style={styles.container}>
        <View style={styles.mainIcon}>
          {ICONS[item.icon] || ICONS.anotherIcon}
        </View>
        <View style={styles.textContainer}>
          <AppText type="h2">{item.title}</AppText>
          <AppText type="body1" color="text2">
            {item.description}
          </AppText>
        </View>
        <SlidersVerticalIcon style={styles.settingsIcon} />
      </View>
    </AppButton>
  );
};

const useStyles = makeStyles((theme, props: ISportItem) => ({
  button: {
    backgroundColor:
      props.index % 2 !== 0
        ? theme.colors.background
        : theme.colors.backgroundSecondary,
    borderRadius: 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 18,
    paddingLeft: 32,
    paddingRight: 16,
    backgroundColor:
      props.index % 2 !== 0
        ? theme.colors.backgroundSecondary
        : theme.colors.background,
    borderBottomLeftRadius: 60,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  mainIcon: {
    marginRight: 10,
  },
  settingsIcon: {
    alignSelf: "flex-end",
  },
}));

export default SportItem;
