import { openDatabase } from "expo-sqlite";

const db = openDatabase("PetsDatabase.db");

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, breed TEXT, favToy TEXT);',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.error('Error creating table', error)
    );
  });
};

export const addPet = (avatar, name, birthday, breed, favToy) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO pets (avatar, name, birthday, breed, favToy) VALUES (?, ?, ?, ?, ?);",
        [avatar, name, birthday, breed, favToy],
        (_, results) => {
          resolve(results.insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getPets = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM pets;",
        [],
        (_, results) => {
          const pets = results.rows._array; // Convert results to array
          resolve(pets);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const removePet = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM pets WHERE id = ?",
        [id],
        (_, result) => {
          // Check if any rows were affected (if a pet with the given ID existed)
          if (result.rowsAffected > 0) {
            resolve(`Pet with ID ${id} removed successfully`);
          } else {
            reject(`Pet with ID ${id} not found`);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const clearPets = () => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM pets;", [], (_, result) => {
      console.log("Clear btn pressed", "Rows affected:", result.rowsAffected);
    });
  });
};
