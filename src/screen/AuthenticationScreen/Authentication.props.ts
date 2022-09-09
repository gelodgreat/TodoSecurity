export interface AuthenticationPublicProps {}
export interface AuthenticationPrivateProps {
  onNavigateToSettings: () => void;
  authenticate: () => void;
}
export interface AuthenticationProps
  extends AuthenticationPublicProps,
    AuthenticationPrivateProps {}
