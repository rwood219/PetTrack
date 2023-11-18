import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { addPet, initDatabase } from "../../database";

const AddPetScreen = ({ updatePetList, navigation }) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirthday, setPetBirthday] = useState("");
  const [breed, setBreed] = useState("");
  const [avatar, setAvatar] = useState("");
  const [petToy, setPetToy] = useState("");
  const [petMeds, setPetMeds] = useState("");
  const [refresh, setRefreash] = useState(false)

  const handleAddPet = () => {
    initDatabase();

    const addPetInfo = async (avatar, name, birthday, type, favToy, meds) => {
      try {
        const petId = await addPet(avatar, name, birthday, type, favToy, meds);
        console.log(`Pet added with ID: ${petId}`);
      } catch (error) {
        console.error("Error adding pet", error);
      }
    };
    addPetInfo(avatar, petName, petBirthday, petType, petToy, petMeds);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.inputContainer}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Avatar.Image
            style={styles.avatar}
            size={24}
            source={require("../../assets/avatar-placeholder.jpg")}
          />
          {avatar && (
            <Image
              source={{ uri: avatar }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Button title="Pick an image from camera roll" onPress={pickImage} />

          <TextInput
            style={styles.input}
            placeholder="Pet Name"
            value={petName}
            onChangeText={(text) => setPetName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Pet Birthday"
            value={petBirthday}
            onChangeText={(text) => setPetBirthday(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Pet Type"
            value={petType}
            onChangeText={(text) => setPetType(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Pet Medication"
            value={petMeds}
            onChangeText={(text) => setPetMeds(text)}
          />
          <Button style={styles.button} title="Add" onPress={handleAddPet} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8a166",
    padding: 16,
    marginTop: 0,
  },
  avatar: {
    marginBottom: 16,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  button: {
    width: "80%",
  },
});

export default AddPetScreen;
