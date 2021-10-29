import React from 'react';
import 'react-native-gesture-handler';
// Componets
import StackNavigator from './src/navigator/StackNavigator';
import { ThemeProvider } from './src/context/themeContext';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({ children }: AppStateProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

export default App;
