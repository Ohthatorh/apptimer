import { FC } from "react";
import AppText from "../../../../components/app-text";

interface IExplosion {}

const Explosion: FC<IExplosion> = () => {
  return (
    <AppText type="body1" color="text2">
      Взрыв 0:20
    </AppText>
  );
};

export default Explosion;
