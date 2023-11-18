import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { clearPets, initDatabase, getPets } from "../../database";
import PetList from "../Components/PetList";
import { Appbar } from "react-native-paper";

initDatabase();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    backgroundColor: "#e8a166",
  },
});

const HomeScreen = ({ navigation }) => {
    const [pets, setPets] = useState([]);

    useEffect(()=>{
      fetchPets()
    },[]);

    const fetchPets = async () => {
      try {
        const petsData = await getPets();
        setPets(petsData)
      }catch (err) {

      }
    };

    const handleAddPet = async (newPet) => {
      try {
        const petId = await addPet(newPet); // Assuming addPet returns the ID of the newly added pet
        console.log(`Pet added with ID: ${petId}`);
        fetchPets(); // Fetch updated pet data after adding a new pet
      } catch (error) {
        console.error("Error adding pet", error);
      }
    };





  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="PetTrack" />
      </Appbar.Header>
      <View style={styles.container}>
        <PetList pets={pets} navigation={navigation}/>
      </View>
    </>
  );
};

export default HomeScreen;
