import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditPetScreen from "./src/Screens/EditPetScreen"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddPetScreen from "./src/Screens/AddPetScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {

    const [pets, setPets] = useState('')

  const updatePetList = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
  };


  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddPet" component={AddPetScreen} options={{
          tabBarLabel:'Add Pet'
        }} />
        <Tab.Screen name="EditPetScreen" component={EditPetScreen} options={{
          tabBarLabel:'Edit'
        }} />
      </Tab.Navigator>
      
      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} pets={pets} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddPetScreen"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <AddPetScreen {...props} updatePetList={updatePetList} />}
      </Stack.Screen>
    </NavigationContainer>
  );
}


