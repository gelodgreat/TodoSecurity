/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  ImageRow,
  InputContainer,
  Input,
  AddBtn,
  RowItem,
} from './Home.style';
import {HomeProps} from './Home.props';
import {FlatList} from 'react-native';
import {Notes} from 'types/Notes';
import {Button, Text} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = (props: HomeProps) => {
  const {
    notes,
    onAdd,
    onEdit,
    onRemove,
    setTextNoteInput,
    textNoteInput,
    isUpdate,
    setIsUpdate,
  } = props;

  const renderNotes = ({item}: any) => {
    const noteData: Notes = item;
    return (
      <RowItem>
        <TouchableOpacity
          onPress={() => {
            setIsUpdate(noteData);
            setTextNoteInput(noteData.note);
          }}>
          <Text>{noteData.note}</Text>
        </TouchableOpacity>
        <Button onPress={() => onRemove(noteData.id)}>Remove</Button>
      </RowItem>
    );
  };

  return (
    <Container>
      <InputContainer>
        <Input
          mode="outlined"
          value={textNoteInput}
          onChangeText={setTextNoteInput}
          placeholder="Add Note"
        />

        <AddBtn
          onPress={isUpdate !== null ? onEdit : onAdd}
          mode="outlined"
          compact
          contentStyle={{height: 70}}>
          {isUpdate !== null ? 'Update' : 'Add'}
        </AddBtn>
      </InputContainer>

      <FlatList data={notes} renderItem={renderNotes} />
    </Container>
  );
};

export default HomeScreen;
