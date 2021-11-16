import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToStorage = async (name, item) => {
  try {
    await AsyncStorage.setItem(name, item);
  } catch (error) {
    console.log("Error saving to the storage");
  }
};

export const getFromStorage = async (name) => {
  try {
    await AsyncStorage.getItem(name);
  } catch (error) {
    console.log("Error getting item from storage");
  }
};

export const removeFromStorage = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error) {
    console.log("Error removing item from the storage");
  }
};

export const cleanStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error clearing storage.");
  }
};
