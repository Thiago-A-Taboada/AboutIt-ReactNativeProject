import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MyNavigator from './src/navigations/MyNavigator';

import { CombinedDefaultTheme } from './src/themes/AppTheme';
import { AuthProvider } from './src/context/AuthContext';


const Tab = createMaterialBottomTabNavigator();

export default function App() {



  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <AuthProvider>
        <MyNavigator />
      </AuthProvider>
    </PaperProvider>
  );
}
