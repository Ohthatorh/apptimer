import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { TIcon } from "../../../services/types";

const SlidersVerticalIcon: FC<TIcon> = ({ style }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
      <Path
        d="M4 21V14M4 10V3M12 21V12M12 8V3M12 8H10H14H12ZM20 21V16M20 12V3M2 14H6M18 16H22"
        stroke="#E9213C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 21V14M4 10V3M20 21V16M20 12V3M2 14H6M18 16H22"
        stroke="#5B7586"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SlidersVerticalIcon;
