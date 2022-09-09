import React, {useEffect, useState} from 'react';
import AuthenticationScreen from './Authentication.view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  AuthenticationPrivateProps,
  AuthenticationProps,
} from './Authentication.props';
import {Linking} from 'react-native';
import {biometricsAuth} from 'utils/biometricAuth';
import {currentAuthentication} from 'redux/actions';
import {BiometricsType} from 'types/Biometrics';
import {StoreType} from 'types/Store';
import {HOME_SCREEN} from 'const/navigation';

const AuthenticationContainer = (props: AuthenticationProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state: StoreType) => state.user);

  const authenticate = async () => {
    if (!currentUser?.success) {
      const response: BiometricsType = await biometricsAuth(
        currentUser?.success,
      ); //getting response from authentication

      dispatch(currentAuthentication(response)); //saving response from authentication
      if (response.success) {
        navigation.navigate(HOME_SCREEN);
      }
    }
  };

  const onNavigateToSettings = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    const load = async () => {
      await authenticate();
    };
    load();
  }, []);

  const generatedProps: AuthenticationPrivateProps = {
    onNavigateToSettings,
    authenticate,
  };

  return <AuthenticationScreen {...generatedProps} {...props} />;
};
export default AuthenticationContainer;
