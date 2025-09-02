import {
  createNativeStackNavigator,
  NativeStackHeaderLeftProps,
  NativeStackHeaderRightProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  HomeScreen,
  SettingsScreen,
  SportScreen,
  StopwatchScreen,
} from "../../../screens";
import { Colors, Text, Theme, useTheme } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { ChevronDown } from "lucide-react-native";
import HomeHeaderRight from "../../../screens/home-screen/home-header-right";
import HomeHeaderLeft from "../../../screens/home-screen/home-header-left";

const Stack = createNativeStackNavigator();

const screenOptions = (
  title: string,
  theme: {
    colors: Colors;
  } & Theme,
  HeaderRight?: (props: NativeStackHeaderRightProps) => React.ReactNode,
  HeaderLeft?: (props: NativeStackHeaderLeftProps) => React.ReactNode,
): NativeStackNavigationOptions => {
  return {
    title,
    headerStyle: { backgroundColor: theme.colors.background },
    headerTitleStyle: { color: theme.colors.text },
    headerShadowVisible: false,
    contentStyle: {
      backgroundColor: theme.colors.background,
    },
    headerLeft: HeaderLeft, // Убрано ()
    headerRight: HeaderRight, // Убрано ()
  };
};

export function HomeStack() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions(
          "БОКС",
          theme,
          (props) => (
            <HomeHeaderRight {...props} />
          ),
          (props) => (
            <HomeHeaderLeft {...props} />
          ),
        )}
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
        options={screenOptions("СЕКУНДОМЕР", theme)}
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
        options={screenOptions("СПОРТ", theme)}
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
        options={screenOptions("НАСТРОЙКИ", theme)}
      />
    </Stack.Navigator>
  );
}
