import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#232326',
    background: '#232326',
    text: '#EBECFF',
    surface: '#343438',
    disabled: '#9B8EBB',
    

  },
};
