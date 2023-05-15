import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../themes/colors";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import ForgetPassword from "../pages/ForgetPassword";
import MainHome from "../pages/Main/Home";
import MainClass from "../pages/Main/Class";
import MainActivity from "../pages/Main/Activity";
import MainFile from "../pages/Main/File";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: { height: 60, paddingBottom: 6 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainHome}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Class"
        component={MainClass}
        options={{
          tabBarLabel: "Aulas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="desktop-mac"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={MainActivity}
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Files"
        component={MainFile}
        options={{
          tabBarLabel: "Arquivos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
}
