import { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, IconButton, Avatar } from "react-native-paper";
import { removePet, dropTable } from "../../database.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 16,
    backgroundColor: "#49858a",
  },
});

//Fetch Pets in Database
const handleEdit = (id) => {
    removePet()
};

const EditPetScreen = ({ route }) => {
const { petId } = route.params;


  return (
    <View style={styles.container}>
        <Text>Edit Pet Screen for Pet ID: {petId}</Text>
      <IconButton
        icon="delete"
        color="red"
        size={20}
        onPress={() => handleEdit()}
      />
    </View>
  );
};

EditPetScreen.options = {
    title: 'Edit Pet', // Set the title for the header
  };
  
export default EditPetScreen;
