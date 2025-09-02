import { createTheme } from "@rneui/themed";
import { TextStyle } from "react-native";

declare module "@rneui/themed" {
  export interface Colors {
    backgroundSecondary: string;
    accent1: string;
    text: string;
    text2: string;
    accent2: string;
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
      body2Up: TextStyle;
      h1: TextStyle;
      h2: TextStyle;
      h3: TextStyle;
      h4: TextStyle;
      body1: TextStyle;
      body2: TextStyle;
      caption: TextStyle;
      button: TextStyle;
      footnote: TextStyle;
    };
  }
}

export const appTheme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
    background: "#1A2127",
    backgroundSecondary: "#202830",
    accent1: "#00BADA",
    accent2: "#E9213C",
    text: "#F9F8F8",
    text2: "#5B7586",
  },
  // darkColors: {
  //   primary: '#000',
  // },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  text: {
    default: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 20,
    },
    h1: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 43,
    },
    h2: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 26,
    },
    body1: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 22,
    },
    body1Up: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 20,
      textTransform: "uppercase",
    },
    body2: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 19,
    },
    body2Up: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 19,
      textTransform: "uppercase",
    },
    button: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 22,
      textTransform: "uppercase",
    },
    footnote: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 9,
      lineHeight: 11,
      textTransform: "uppercase",
    },
  },
  mode: "light",
});
