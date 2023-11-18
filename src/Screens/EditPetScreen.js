import { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import AddPet from "../Components/AddPet";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      margin: 16,
      backgroundColor: "#49858a",
    },
  });


  const editPet = (id) => {
    
  }



const EditPetScreen = () => {
    return (
        <View style={styles.container}>
          <AddPet />
        </View>
      );
    
}



export default EditPetScreen;
