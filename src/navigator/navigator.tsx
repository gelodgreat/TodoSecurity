import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from '../screen/HomeScreen/Home.container';
import AuthenticationContainer from '../screen/AuthenticationScreen/Authentication.container';
import {useSelector} from 'react-redux';
import {StoreType} from 'types/Store';
import {AUTHENTICATION_SCREEN, HOME_SCREEN} from 'const/navigation';
const Stack = createNativeStackNavigator();

const DefaultStack = () => {
  const isAuthenticated = useSelector((state: StoreType) => state.user); //checking of response if authenticated

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          isAuthenticated.success ? HOME_SCREEN : AUTHENTICATION_SCREEN
        }>
        {isAuthenticated.success ? (
          //handling of stack navigation when user is authenticated
          <Stack.Screen name={HOME_SCREEN} component={HomeContainer} />
        ) : (
          <Stack.Screen
            name={AUTHENTICATION_SCREEN}
            component={AuthenticationContainer}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DefaultStack;
