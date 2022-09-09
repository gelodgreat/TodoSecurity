import {Notes} from 'types/Notes';

export const updateNotesList = (notes: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_NOTES_RESULT',
      notes,
    });
  };
};

export const addNotes = (Note: Notes) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'LOAD_NOTES_SUCCESS',
        payload: [Note],
      });
    } catch (error) {
      dispatch({type: 'LOAD_NOTES_FAILURE', payload: error});
    }
  };
};

export const editNotes = (oldNote: Notes, updatedNote: Notes) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'LOAD_NOTES_UPDATE_SUCCESS',
        payload: {
          old: oldNote,
          updated: updatedNote,
        },
      });
    } catch (error) {
      dispatch({type: 'LOAD_NOTES_FAILURE', payload: error});
    }
  };
};

export const deleteNotes = (id: string) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'DELTE_NOTES',
        payload: {id},
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearNotesList = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'CLEAR_Notes_LIST',
    });
  };
};
