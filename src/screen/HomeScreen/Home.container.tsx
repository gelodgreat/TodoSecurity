import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomePrivateProps, HomeProps} from './Home.props';
import {StoreType} from 'types/Store';
import {Notes} from 'types/Notes';
import {addNotes} from 'redux/actions';
import {deleteNotes, editNotes} from 'redux/actions/notes';

const HomeContainer = (props: HomeProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state: StoreType) => state.user);
  const notes = useSelector((state: StoreType) => state.notes.notes) || [];
  const [isUpdate, setIsUpdate] = useState<Notes | null>(null);
  const [textNoteInput, setTextNoteInput] = useState('');

  const onAdd = () => {
    if (textNoteInput.length > 0) {
      const dataObj: Notes = {
        id: (notes.length + 1).toString(),
        note: textNoteInput,
        dateAdded: new Date(),
      };
      dispatch(addNotes(dataObj));
      setTextNoteInput('');
    }
  };

  const onEdit = () => {
    const dataObj = {
      id: (notes.length + 1).toString(),
      note: textNoteInput,
      dateAdded: new Date(),
    };
    dispatch(editNotes(isUpdate, dataObj));
    setTextNoteInput('');
    setIsUpdate(null);
  };

  const onRemove = (id: string) => {
    dispatch(deleteNotes(id));
  };

  const generatedProps: HomePrivateProps = {
    notes,
    textNoteInput,
    setTextNoteInput,
    onAdd,
    onRemove,
    onEdit,
    isUpdate,
    setIsUpdate,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
