import React, { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import AddPet from "../Components/AddPet";
import { clearPets, initDatabase, getPets } from "../../database";
import PetList from "../Components/PetList";
import { Appbar } from "react-native-paper";

initDatabase();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    backgroundColor: "#c78b2a",
  },
});



const HomeScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="PetTrack" />
      </Appbar.Header>
      <View style={styles.container}>
        <PetList />
      </View>
    </>
  );
};

export default HomeScreen;
