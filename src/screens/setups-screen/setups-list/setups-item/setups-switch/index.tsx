import { Switch } from "@rneui/themed";
import { FC } from "react";
import useSportsStore from "../../../../../services/store/useSportsStore";
import { TSetupItem } from "../../../../../services/types";

interface ISetupsSwitch {
  setupItem: TSetupItem;
  currentSport: string;
  showSetups: boolean;
}

const SetupsSwitch: FC<ISetupsSwitch> = ({
  setupItem,
  currentSport,
  showSetups,
}) => {
  const { toggleSwitch } = useSportsStore();

  const handlePress = (value: boolean) => {
    toggleSwitch(currentSport, setupItem.id, value);
  };

  return (
    <Switch color="accent1" value={showSetups} onValueChange={handlePress} />
  );
};

export default SetupsSwitch;
