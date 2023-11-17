import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, IconButton } from 'react-native-paper'; // Import Button and IconButton from React Native Paper
import { getPets } from '../../database';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets from the database when the component mounts
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.error('Error fetching pets', error);
    }
  };

  const handleEdit = (petId) => {
    // Implement your edit logic here
    console.log(`Edit button pressed for pet with ID: ${petId}`);
  };

  const handleRemove = (petId) => {
    // Implement your remove logic here
    console.log(`Remove button pressed for pet with ID: ${petId}`);
  };

  return (
    <View style={styles.container}>
      <Text>Pet List</Text>
      {pets.map(pet => (
        <View key={pet.id}>
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
    </View>
  );
};

const styles = StyleSheet.create({
    petList: {
      marginTop: 0,
      flex: 1,
      marginBottom: 20,
    },
    petInfo: {
      margin: 20,
      backgroundColor: "#e8a166",
      width: 300,
      justifyContent: "center",
    },
  });

export default PetList;



