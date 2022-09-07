import {Dispatch, SetStateAction} from 'react';

export interface AuthenticationPublicProps {}
export interface AuthenticationPrivateProps {}
export interface AuthenticationProps
  extends AuthenticationPublicProps,
    AuthenticationPrivateProps {}
