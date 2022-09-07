import React, {useEffect, useState} from 'react';
import AuthenticationScreen from './Authentication.view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {AuthenticationProps} from './Authentication.props';

const AuthenticationContainer = (props: AuthenticationProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const generatedProps = {};

  return <AuthenticationScreen {...generatedProps} {...props} />;
};
export default AuthenticationContainer;
