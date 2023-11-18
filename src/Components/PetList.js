import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton, Avatar } from "react-native-paper";
import { getPets, removePet, initDatabase } from "../../database";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    initDatabase();

   
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.error("Error fetching pets", error);
    }
  };

  const handleEdit = (petId, { navigation }) => {
    navigation.navigate("EditScreen");
    console.log(`Edit button pressed for pet with ID: ${petId}`);
  };

 


  return (
    <View style={styles.container}>
      
      <ScrollView>
        {pets.map((pet) => (
          <View key={pet.id} style={styles.petInfo}>
              <Avatar.Image
          style={styles.avatar}
          size={24}
          source={require("../../assets/avatar-placeholder.jpg")}
        />
            <Text>Name: {pet.name}</Text>
            <Text>Birthday: {pet.birthday}</Text>
            <Text>Breed: {pet.breed}</Text>
            <Text>Favorite Toy: {pet.favToy}</Text>
            <Button
              icon="pencil"
              mode="contained"
              onPress={() => handleEdit(pet.id)}
            >
              Edit
            </Button>
            <IconButton
              icon="delete"
              color="red"
              size={20}
              onPress={() => handleRemove(pet.id)}
            />
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
    marginBottom: 20,
  },
  petInfo: {
    margin: 20,
    backgroundColor: "#e8a166",
    width: 300,
    justifyContent: "center",
    borderRadius: 25,
    padding: 20,
  },
});

export default PetList;