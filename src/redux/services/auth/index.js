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
export function registerNewUser(userData) {

    return new Promise((resolve, reject) => {

        try {

            resolve({ 'success': true, "user_token": "vivek" });
        }
        catch (e) {

            logError(e);
            reject(e);
        }

    });
}

export async function getSchoolBaseUrlBySchoolCode(schoolCode) {
    

    if (schoolCode) {

        callApi("/getBaseUrl", {

        }).then((response) => {

            return { 'success': true, 'baseUrl': "http://localhost:80" };

        }).catch((e) => {

            logError(e);
            return { 'success': true, 'error': e, 'baseUrl': "http://localhost:80" };

        });

    }

    return null;
}