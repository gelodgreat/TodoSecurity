import {Dispatch, SetStateAction} from 'react';

export interface AuthenticationPublicProps {}
export interface AuthenticationPrivateProps {
  onNavigateToSettings: () => void;
}
export interface AuthenticationProps
  extends AuthenticationPublicProps,
    AuthenticationPrivateProps {}
