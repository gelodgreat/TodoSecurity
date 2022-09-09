import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
  supportedAuthenticationTypesAsync,
} from 'expo-local-authentication';

export const biometricsAuth = async (hasAuthenticated: boolean) => {
  // const compatible = await hasHardwareAsync();
  if (!hasAuthenticated) {
    const supported = await supportedAuthenticationTypesAsync();
    console.log(supported);

    // if (!compatible) {
    //   throw 'Device not compatible for biometric authentication';
    // }

    // const enrolled = await isEnrolledAsync();
    // if (!enrolled) {
    //   throw "Device doesn't have biometric authentication enabled";
    // }

    const result = await authenticateAsync({
      promptMessage: 'Securing your access',
    });
    if (!result.success) {
      throw `${result.error} - Authentication unsuccessful`;
    }
    return result;
  }
  return;
};
