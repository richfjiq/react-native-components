import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'Light Theme' } | { type: 'Dark Theme' };

export interface ThemeState extends Theme {
  currentTheme: 'Light' | 'Dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'rgba(0,0,0,0.3)',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'rgba(255,255,255,0.8)',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'Light Theme':
      return {
        ...lightTheme,
      };
    case 'Dark Theme':
      return {
        ...darkTheme,
      };
    default:
      return state;
  }
};
