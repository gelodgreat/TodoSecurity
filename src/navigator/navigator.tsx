import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from '../screen/HomeScreen/Home.container';
import AuthenticationContainer from '../screen/AuthenticationScreen/Authentication.container';

const Stack = createStackNavigator();

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
