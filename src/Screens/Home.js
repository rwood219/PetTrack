import React, { useState } from "react";
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
