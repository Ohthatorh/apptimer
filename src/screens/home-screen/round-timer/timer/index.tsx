import { FC } from "react";
import AppText from "../../../../components/app-text";

interface ITimer {}

const Timer: FC<ITimer> = () => {
  return <AppText type="number">00:20</AppText>;
};

export default Timer;
