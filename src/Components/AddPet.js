import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { addPet, initDatabase } from "../../database";

const AddPet = ({ onClose }) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirthday, setPetBirthday] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [petToy, setPetToy] = useState("");
  const [petMeds, setPetMeds] = useState("")

  const handleAddPet = () => {
    // Handle adding pet to the database
    initDatabase();

    const addPetInfo = async (name, birthday, breed, favToy) => {
      try {
        const petId = await addPet(name, birthday, breed, favToy);
        console.log(`Pet added with ID: ${petId}`);
      } catch (error) {
        console.error("Error adding pet", error);
      }
    };

    //change this
    addPetInfo(petName, petBirthday, petType, petToy, petMeds);
    console.log("Pet Name:", petName);
    console.log("Pet Type:", petType);
  };


  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <Avatar.Image
          size={24}
          source={require("../../assets/avatar-placeholder.jpg")}
        />

        <TextInput
          placeholder="Pet Name"
          value={petName}
          onChangeText={(text) => setPetName(text)}
        />

        <TextInput
          placeholder="Pet Birthday"
          value={petBirthday}
          onChangeText={(text) => setPetBirthday(text)}
        />

        <TextInput
          placeholder="Pet Type"
          value={petType}
          onChangeText={(text) => setPetType(text)}
        />

        <Button title="Add" onPress={handleAddPet} />

        <Button title="Close" onPress={onClose} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    marginTop: 200,
    backgroundColor: '#e8a166'
  },
});

export default AddPet;
