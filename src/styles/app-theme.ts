import { createTheme } from '@rneui/themed';
import { TextStyle } from 'react-native';

declare module '@rneui/themed' {
  export interface Colors {
    accent1: string;
    text: string;
    text2: string;
  }
  export interface TextProps {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    body1?: boolean;
    body2?: boolean;
    caption?: boolean;
    button?: boolean;
  }

  export interface Theme {
    text: {
      default: TextStyle;
      body1Up: TextStyle;
    };
  }
}

export const appTheme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    background: '#1A2127',
    accent1: '#00BADA',
    text: '#F9F8F8',
    text2: '#5B7586',
  },
  darkColors: {
    primary: '#000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  text: {
    default: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 20,
    },
    body1Up: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 20,
      textTransform: 'uppercase',
    },
  },
  mode: 'light',
});
