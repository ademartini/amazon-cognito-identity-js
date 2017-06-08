import CognitoIdentityServiceProvider from 'aws-sdk/dist/aws-sdk-react-native/clients/cognitoidentityserviceprovider';
import * as enhancements from './src';

export * from './src';

Object.keys(enhancements).forEach(key => {
  CognitoIdentityServiceProvider[key] = enhancements[key];
});

// The version of crypto-browserify included by aws-sdk/dist/aws-sdk-react-native only
// checks for window.crypto, not window.msCrypto as used by
// IE 11 – so we set it explicitly here
if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
  window.crypto = window.msCrypto;
}
