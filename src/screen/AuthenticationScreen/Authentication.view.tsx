/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, ImageRow} from './Authentication.style';
import {AuthenticationProps} from './Authentication.props';
import {ActivityIndicator, Text, Button} from 'react-native-paper';

const AuthenticationScreen = (props: AuthenticationProps) => {
  const {onNavigateToSettings, authenticate} = props;

  return (
    <Container>
      <Text style={{textAlign: 'center'}}>Set Authentication to Proceed</Text>
      <Button onPress={authenticate}>Authenticate</Button>
      <Button onPress={onNavigateToSettings}>Go to Settings</Button>
    </Container>
  );
};

export default AuthenticationScreen;
