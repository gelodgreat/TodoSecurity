import {Notes} from 'types/Notes';

export const NotesReducer = (
  state = {
    notes: [] as Notes[],
    isLoading: false,
    error: null,
  },
  action: any,
) => {
  switch (action.type) {
    case 'LOAD_NOTES_START':
      return {...state, isLoading: true};
    case 'LOAD_NOTES_SUCCESS':
      const localNotes = state?.notes || [];
      //handling of adding the notes
      return {
        ...state,
        notes: [...action.payload, ...localNotes],
        isLoading: false,
      };
    case 'LOAD_NOTES_UPDATE_SUCCESS':
      const localNotesUpdate = state?.notes || [];
      //handling of updating the notes
      return {
        ...state,
        notes: localNotesUpdate.map(note =>
          note.id === action.payload.old.id
            ? {...note, note: action.payload.updated.note}
            : note,
        ),
        isLoading: false,
      };
    case 'DELTE_NOTES':
      const localNotesLoaded = state?.notes || [];
      //handling of updating the notes
      return {
        ...state,
        notes: localNotesLoaded.filter(note => note.id !== action.payload.id),
        isLoading: false,
      };
    case 'LOAD_NOTES_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'UPDATE_NOTES_RESULT': {
      return {...state, images: action.notes};
    }
    case 'CLEAR_NOTES_LIST': {
      return {};
    }
    default:
      return state;
  }
};
