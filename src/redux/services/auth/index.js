import Promise from 'bluebird';
import { logError } from '../../../utils/errorLog';
import { callApi } from '../../../utils/request';

/**
 * 
 * @param {*} userData
 * user must have firtname, date of birth, school code 
 * 
 * User Information send to server & save the user token into Async Storage
 */
export function register(userData) {

    return new Promise((resolve, reject) => {

        try {

            resolve({ 'user_token': "dummy_user_token"  });
        }
        catch (e) {

            logError(e);
            reject(e);
        }

    });
}