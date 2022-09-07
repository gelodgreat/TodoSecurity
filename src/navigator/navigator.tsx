import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from '../screen/HomeScreen/Home.container';
import AuthenticationContainer from '../screen/AuthenticationScreen/Authentication.container';
import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from 'expo-local-authentication';

const Stack = createNativeStackNavigator();

const DefaultStack = () => {
  const isAuthenticated = false;
  const biometricsAuth = async () => {
    const compatible = await hasHardwareAsync();
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
    return;
  };
  useEffect(() => {
    biometricsAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeContainer} />
        ) : (
          <Stack.Screen
            name="Authentication"
            component={AuthenticationContainer}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DefaultStack;
