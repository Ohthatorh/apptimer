import { FC } from 'react';
import { icons, LucideProps } from 'lucide-react-native';

type IconName = keyof typeof icons;

interface IAppIcon extends Omit<LucideProps, 'name'> {
  name: IconName;
}

const AppIcon: FC<IAppIcon> = ({ name, color, size, ...props }) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} {...props} />;
};

export default AppIcon;
