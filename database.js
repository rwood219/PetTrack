
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('PetsDatabase.db');

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

export const addPet = (name, birthday, breed, favToy) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO pets (name, birthday, breed, favToy) VALUES (?, ?, ?, ?);',
        [name, birthday, breed, favToy],
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
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM pets;',
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

  console.log(getPets())