import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const AppStack = createStackNavigator();

import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function Routes () {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>

                <AppStack.Screen name="StartGame" component={ StartGame } />

                <AppStack.Screen name="GameScreen" component={ GameScreen } />

                <AppStack.Screen name="GameOver" component={ GameOver } />
            
            </AppStack.Navigator>
        </NavigationContainer>
    );
}