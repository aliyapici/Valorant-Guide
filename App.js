import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useFonts } from "expo-font";

import AgentsLists from "./src/screens/agents/agents_lists";
import MapsLists from "./src/screens/maps/maps_lists";
import WeaponsLists from "./src/screens/weapons/weapons_lists";
import RanksLists from "./src/screens/ranks/ranks_lists";
import AgentsDetails from "./src/screens/agents/agents_details";
import WeaponsDetails from "./src/screens/weapons/weapons_details";
import Skins from "./src/screens/weapons/skins";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AgentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AgentsLists"
        component={AgentsLists}
        options={{ title: "Agents" }}
      />
      <Stack.Screen name="AgentsDetails" component={AgentsDetails} />
    </Stack.Navigator>
  );
};

const MapsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapsLists"
        component={MapsLists}
        options={{ title: "Maps" }}
      />
    </Stack.Navigator>
  );
};

const WeaponsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WeaponsLists"
        component={WeaponsLists}
        options={{ title: "Weapons" }}
      />
      <Stack.Screen name="WeaponsDetails" component={WeaponsDetails} />
      <Stack.Screen name="Skins" component={Skins} />
    </Stack.Navigator>
  );
};

const RanksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RanksLists"
        component={RanksLists}
        options={{ title: "Ranks" }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const [fontsLoaded] = useFonts({
    "Valorant-Font": require("./src/assets/fonts/Valorant-Font.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Yazı tipi yüklenene kadar boş bir görünümü döndürün
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          height: 90,
        }}>
        <Tab.Screen
          name="Agents"
          component={AgentsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./src/assets/images/agents.png")}
                style={{ resizeMode: "contain", height: 25, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./src/assets/images/maps.png")}
                style={{ resizeMode: "contain", height: 25, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Weapons"
          component={WeaponsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./src/assets/images/weapons.png")}
                style={{ resizeMode: "contain", height: 25, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ranks"
          component={RanksStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./src/assets/images/ranks.png")}
                style={{ resizeMode: "contain", height: 25, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
