import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <SignIn/>
    <GlobalStyle/>
  </>
);

export default App;
