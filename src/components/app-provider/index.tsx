import { ThemeProvider } from '@rneui/themed';
import { FC } from 'react';
import AppNavigator from '../app-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { appTheme } from '../../styles/app-theme';

interface IAppProvider {}

const AppProvider: FC<IAppProvider> = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={appTheme}>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
