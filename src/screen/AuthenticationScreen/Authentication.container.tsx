import React, {useEffect, useState} from 'react';
import AuthenticationScreen from './Authentication.view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  AuthenticationPrivateProps,
  AuthenticationProps,
} from './Authentication.props';
import {Linking} from 'react-native';

const AuthenticationContainer = (props: AuthenticationProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onNavigateToSettings = () => {
    Linking.openSettings();
  };

  const generatedProps: AuthenticationPrivateProps = {onNavigateToSettings};

  return <AuthenticationScreen {...generatedProps} {...props} />;
};
export default AuthenticationContainer;
