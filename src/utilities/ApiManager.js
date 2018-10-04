/**
 * Created by Duong Le on 9/15/18.
 */

import {apiKeyTwilio, baseUrlVerificationTwilio} from '../constants/constant';
import {getWithTimeout, postWithTimeout} from './networking';

/**
 * Send verification phone number
 * @param {string} countryCode, default +84
 * @param {!string} phoneNumber
 * @return {Promise<any> | Promise}
 */
export function sendVerificationPhoneNumber(countryCode = '+84', phoneNumber) {
  return new Promise(resolve => {

    let body = {
      api_key: apiKeyTwilio,
      via: 'sms',
      country_code: countryCode,
      phone_number: phoneNumber
    }

    postWithTimeout(`${baseUrlVerificationTwilio}/phones/verification/start`, {}, body).then(response => {
      if (response.success) {
        resolve(true)
      } else {
        resolve(response.message)
      }
    })

  })
}

/**
 * Validate verification code
 * @param {string} countryCode, default +84
 * @param {!string} phoneNumber
 * @param {!string} code
 * @return {Promise<any> | Promise}
 */
export function validateVerificationCode(countryCode = '+84', phoneNumber, code) {
  return new Promise(resolve => {
    getWithTimeout(`${baseUrlVerificationTwilio}/phones/verification/check?via=sms&api_key=${apiKeyTwilio}&phone_number=${phoneNumber}&verification_code=${code}&country_code=${countryCode}`, {}).then(response => {
      if (response.success) {
        resolve(response)
      } else {
        resolve(response.message)
      }
    })
  })
}
