import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  HomeStack,
  StopwatchStack,
  SettingsStack,
  SportStack,
} from "../app-stacks";
import AppIcon from "../../app-icon";
import { icons } from "lucide-react-native";
import { Colors, Theme, useTheme } from "@rneui/themed";

const Tab = createBottomTabNavigator();

const RenderTabIcon = (
  name: keyof typeof icons,
  theme: {
    colors: Colors;
  } & Theme,
  props: {
    focused: boolean;
    color: string;
    size: number;
  },
) => {
  return (
    <AppIcon
      name={name}
      size={24}
      color={props?.focused ? theme.colors.accent1 : theme.colors.white}
    />
  );
};

const tabOptions = (
  title: string,
  iconName: keyof typeof icons,
  theme: {
    colors: Colors;
  } & Theme,
): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    title,
    tabBarIcon: (props) => RenderTabIcon(iconName, theme, props),
    tabBarActiveTintColor: theme.colors.accent1,
    tabBarStyle: {
      backgroundColor: theme.colors.background,
      borderTopColor: "transparent",
    },
    tabBarInactiveTintColor: theme.colors.text2,
    tabBarLabelStyle: { fontSize: 8 },
  };
};

export function BottomTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={tabOptions("ТАЙМЕР", "Timer", theme)}
      />
      <Tab.Screen
        name="StopwatchTab"
        component={StopwatchStack}
        options={tabOptions("СЕКУНДОМЕР", "TimerReset", theme)}
      />
      <Tab.Screen
        name="SportTab"
        component={SportStack}
        options={tabOptions("СПОРТ", "HandFist", theme)}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={tabOptions("НАСТРОЙКИ", "Settings", theme)}
      />
    </Tab.Navigator>
  );
}
