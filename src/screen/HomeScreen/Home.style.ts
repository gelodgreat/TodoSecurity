import {Button, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
  align-content: space-between;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Input = styled(TextInput)`
  width: 80%;
  border-radius: 12px;
  margin-right: 8px;
  background-color: white;
`;

export const AddBtn = styled(Button)`
  min-width: 70px;
  background-color: white;
`;

export const RowItem = styled.View`
  flex-direction: row;
  padding: 12px;
  border-radius: 12px;
  justify-content: space-between;
  align-content: space-between;
  background-color: white;
  margin-bottom: 12px;
`;
