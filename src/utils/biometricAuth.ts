import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from 'expo-local-authentication';

export const biometricsAuth = async (hasAuthenticated: boolean) => {
  const compatible = await hasHardwareAsync();
  if (!hasAuthenticated) {
    if (!compatible) {
      throw 'This device is not compatible for biometric authentication';
    }
    const enrolled = await isEnrolledAsync();
    if (!enrolled) {
      throw "This device doesn't have biometric authentication enabled";
    }
    const result = await authenticateAsync();
    if (!result.success) {
      throw `${result.error} - Authentication unsuccessful`;
    }
    return result;
  }
  return;
};
