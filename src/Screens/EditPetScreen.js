import { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, IconButton, Avatar } from "react-native-paper";
import dropTable from '../../database.js'



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


const EditPetScreen = () => {
    return (
        <View style={styles.container}>
        <IconButton
          icon="delete"
          color="red"
          size={20}
          onPress={() => dropTable()}
        />
      </View>
      );
    
}



export default EditPetScreen;
