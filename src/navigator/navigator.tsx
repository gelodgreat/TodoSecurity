import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from '../screen/HomeScreen/Home.container';
import AuthenticationContainer from '../screen/AuthenticationScreen/Authentication.container';

const Stack = createNativeStackNavigator();

const DefaultStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationContainer}
        />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DefaultStack;
