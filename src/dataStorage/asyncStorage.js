import { logError } from '../utils/errorLog';
import { AsyncStorage } from 'react-native';
import Promise from 'bluebird';

export async function setLocalStorageItem(name, data) {

    return new Promise((resolve, reject) => {

        try {

            AsyncStorage.setItem(name, data);
            resolve();

        }
        catch (e) {

            logError(e);
            reject(e);
        }

    });

}

export function getLocalStorageItem(name) {

    return new Promise((resolve, reject) => {

        try {

            AsyncStorage.getItem(name).then((data) => {

                resolve(data);
            })

        } catch (e) {

            logError(e);
            reject(e);
        }

    });
}