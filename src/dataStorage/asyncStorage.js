import { logError } from '../utils/errorLog';
import { AsyncStorage } from 'react-native';
import Promise from 'bluebird';

export async function setLocalStorageItem(name, data) {

    try {

        await AsyncStorage.setItem(name, data);
        return null;

    }
    catch (e) {

        logError(e);
        return e;
    }
}

export function getLocalStorageItem(name) {

    return new Promise((resolve, reject) => {

        try {

            AsyncStorage.getItem(name).then((data) => {

                resolve(data);
            });

        } catch (e) {

            logError(e);
            reject(e);
        }

    });
}

export async function clearStorage() {

    return AsyncStorage.clear();
}