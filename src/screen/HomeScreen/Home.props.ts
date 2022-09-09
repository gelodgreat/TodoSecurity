import {Dispatch, SetStateAction} from 'react';
import {Notes} from 'types/Notes';

export interface HomePublicProps {}
export interface HomePrivateProps {
  notes: Notes[];
  textNoteInput: string;
  setTextNoteInput: Dispatch<SetStateAction<string>>;
  onAdd: () => void;
  onRemove: (id: string) => void;
  onEdit: () => void;
  isUpdate: Notes | null;
  setIsUpdate: Dispatch<SetStateAction<Notes | null>>;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
