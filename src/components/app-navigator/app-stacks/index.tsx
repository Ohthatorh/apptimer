import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  HomeScreen,
  SettingsScreen,
  SportScreen,
  StopwatchScreen,
} from '../../../screens';
import { Colors, Theme, useTheme } from '@rneui/themed';

const Stack = createNativeStackNavigator();

const screenOptions = (
  title: string,
  theme: {
    colors: Colors;
  } & Theme,
): NativeStackNavigationOptions => {
  return {
    title,
    headerStyle: { backgroundColor: theme.colors.background },
    headerTitleStyle: { color: theme.colors.text },
    headerShadowVisible: false,
    contentStyle: {
      backgroundColor: theme.colors.background,
    },
  };
};

export function HomeStack() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions('БОКС', theme)}
      />
    </Stack.Navigator>
  );
}

export function StopwatchStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stopwatch"
        component={StopwatchScreen}
        options={screenOptions('СЕКУНДОМЕР', theme)}
      />
    </Stack.Navigator>
  );
}

export function SportStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sport"
        component={SportScreen}
        options={screenOptions('СПОРТ', theme)}
      />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={screenOptions('НАСТРОЙКИ', theme)}
      />
    </Stack.Navigator>
  );
}
