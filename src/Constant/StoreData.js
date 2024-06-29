

import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Data saved successfully');
    } catch (e) {
        console.error('Error saving data: ', e);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // Data found
            console.log('Retrieved data:', value);
            return value;
        } else {
            console.log('No data found for key:', key);
            return null;
        }
    } catch (e) {
        console.error('Error retrieving data: ', e);
        return null;
    }
};


export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data removed successfully');
    } catch (e) {
        console.error('Error removing data: ', e);
    }
};