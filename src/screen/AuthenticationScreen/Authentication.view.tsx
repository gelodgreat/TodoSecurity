import React from 'react';
import {Container, ImageRow} from './Authentication.style';
import {AuthenticationProps} from './Authentication.props';
import {ActivityIndicator, Text, Button} from 'react-native-paper';

const AuthenticationScreen = (props: AuthenticationProps) => {
  const {onNavigateToSettings} = props;

  return (
    <Container>
      <Text>Set Authentication to Proceed</Text>
      <Button onPress={onNavigateToSettings}>Go to Settings</Button>
    </Container>
  );
};

export default AuthenticationScreen;
