import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton, Avatar } from "react-native-paper";
import { getPets, removePet, initDatabase } from "../../database";
import EditPetScreen from "../Screens/EditPetScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PetList = ({ pets, navigation }) => {
  //const [pets, setPets] = useState([]);

  useEffect(() => {
    initDatabase();
    fetchPets();
  }, [pets]);

  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
      console.log(petsData)
    } catch (error) {
      console.error("Error fetching pets", error);
    }
  };

  const handleEdit = (petId) => {
    navigation.navigate('EditPetScreen', { petId }); 
    console.log(`Edit button pressed for pet with ID: ${petId}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {pets.map((pet) => (
          <View key={pet.id} style={styles.petInfo}>
            <Avatar.Image
              style={styles.avatar}
              size={74}
              source={{ uri: pet.avatar }}
            />
            <Text>Name: {pet.name}</Text>
            <Text>Birthday: {pet.birthday}</Text>
            <Text>Breed: {pet.breed}</Text>
            <Text>Favorite Toy: {pet.favToy}</Text>
            <Text>Medication: {pet.meds}</Text>
            <Button
              icon="pencil"
              mode="contained"
              onPress={() => handleEdit(pet.id)}
            >
              Edit
            </Button>        
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    marginBottom: 0,
  },
  petInfo: {
    margin: 10,
    backgroundColor: "#dec0a4",
    width: 300,
    justifyContent: "center",
    borderRadius: 25,
    padding: 20,
  },
});

export default PetList;
