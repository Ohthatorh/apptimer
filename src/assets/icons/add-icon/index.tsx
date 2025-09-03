import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { TIcon } from "../../../services/types";

const AddIcon: FC<TIcon> = ({ style }) => {
  return (
    <Svg width="51" height="51" viewBox="0 0 51 51" fill="none" style={style}>
      <Path
        d="M25.5 7C35.7173 7 44 15.2827 44 25.5C44 35.7173 35.7173 44 25.5 44C15.2827 44 7 35.7173 7 25.5C7 15.2827 15.2827 7 25.5 7ZM23.7207 18.1016V22.9395H18.8027V26.4727H23.7207V31.2324H27.2539V26.4727H32.1709V22.9395H27.2539V18.1016H23.7207Z"
        fill="#00BADA"
      />
    </Svg>
  );
};

export default AddIcon;
