import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditPetScreen from "./src/Screens/EditPetScreen"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddPetScreen from "./src/Screens/AddPetScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddPet" component={AddPetScreen} />
        <Tab.Screen name="EditPetScreen" component={EditPetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


