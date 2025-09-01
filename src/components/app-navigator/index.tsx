import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { BottomTabs } from './bottom-tabs';

interface IAppNavigator {}

const AppNavigator: FC<IAppNavigator> = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
