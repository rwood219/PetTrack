import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import AddPet from "../Components/AddPet";
import { initDatabase } from "../../database";
import PetList from "../Components/PetProfile";

initDatabase();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Align content to the bottom
    alignItems: "flex-end", // Align items to the right
    margin: 16,
    backgroundColor: "#49858a",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const HomeScreen = () => {
  const [isAddPetVisible, setAddPetVisible] = React.useState(false);

  const showAddPetForm = () => setAddPetVisible(true);
  const hideAddPetForm = () => setAddPetVisible(false);

  return (
    <View style={styles.container}>
      {/* Your main content goes here */}
      <PetList />
      {/* AddPet button */}

      <TouchableOpacity style={styles.addButton} onPress={showAddPetForm}>
        <Text style={styles.addButtonText}>Add Pet</Text>
      </TouchableOpacity>

      {/* AddPet modal */}
      <Modal
        visible={isAddPetVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideAddPetForm}
      >
        <AddPet onClose={hideAddPetForm} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
