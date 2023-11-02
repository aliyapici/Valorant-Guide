import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import AgentsLists from "./screens/agents/agents_lists";
import MapsLists from "./screens/maps/maps_lists";
import WeaponsLists from "./screens/weapons/weapons_lists";
import RanksLists from "./screens/ranks/ranks_lists";
import AgentsDetails from "./screens/agents/agents_details";
import WeaponsDetails from "./screens/weapons/weapons_details";
import Skins from "./screens/weapons/skins";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AgentsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AgentsLists" component={AgentsLists} options={{ title: "Agents" }} />
            <Stack.Screen name="AgentsDetails" component={AgentsDetails} />
        </Stack.Navigator>
    )
}

const MapsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MapsLists" component={MapsLists} options={{ title: "Maps" }} />
        </Stack.Navigator>
    )
}

const WeaponsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WeaponsLists" component={WeaponsLists} options={{ title: "Weapons" }} />
            <Stack.Screen name="WeaponsDetails" component={WeaponsDetails} />
            <Stack.Screen name="Skins" component={Skins} />
        </Stack.Navigator>
    )
}

const RanksStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RanksLists" component={RanksLists} options={{ title: "Ranks" }} />
        </Stack.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                barStyle={{
                    height: 90
                }} >
                <Tab.Screen name="Agents" component={AgentsStack}
                    options={{
                        headerShown: false, tabBarIcon: ({ color }) => (
                            <Image source={require('./assets/images/agents.png')} style={{ resizeMode: 'contain', height: 25, tintColor: color }} />
                        ),
                    }} />
                <Tab.Screen name="Maps" component={MapsStack} options={{
                    headerShown: false, tabBarIcon: ({ color }) => (
                        <Image source={require('./assets/images/maps.png')} style={{ resizeMode: 'contain', height: 25, tintColor: color }} />
                    ),
                }} />
                <Tab.Screen name="Weapons" component={WeaponsStack} options={{
                    headerShown: false, tabBarIcon: ({ color }) => (
                        <Image source={require('./assets/images/weapons.png')} style={{ resizeMode: 'contain', height: 25, tintColor: color }} />
                    ),
                }} />
                <Tab.Screen name="Ranks" component={RanksStack} options={{
                    headerShown: false, tabBarIcon: ({ color }) => (
                        <Image source={require('./assets/images/ranks.png')} style={{ resizeMode: 'contain', height: 25, tintColor: color }} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Routes;