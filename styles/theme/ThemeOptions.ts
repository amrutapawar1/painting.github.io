
// import { ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.color1,
    },
    secondary: {
      main: colors.secondary.color2
    },
    error: {
      main: colors.primary.color2,
    },
    background: {
      default: "var(--white)"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // typography: {
  //   //page headcart
  //   h1: {
  //     fontSize: "38px",
  //     fontWeight: "500",
  //     lineHeight: "60px",
  //     color: colors.primary.color6,
  //     fontFamily: "serif",//playfair display,serif
  //   },
  //   h2: {
  //     fontSize: "26px",
  //     fontWeight: "700",
  //     marginTop: "1rem",
  //     marginBottom: "1rem",
  //     lineHeight: "0.2px",
  //     color: colors.primary.color6,
  //     fontFamily: "Playfair Display", //playfair display,serif
  //   },
  //   h3: {
  //     fontSize: "16px",
  //     fontWeight: "700",
  //     textTransform: "capitalize",
  //     fontFamily: "Bauer Bodoni,serif !important", //baver bodoni, serif
  //   },
  //   h4: {
  //   },
  //   h5: {
  //     fontSize: "14px",
  //     fontWeight: "400",
  //     fontFamily: "Arimo,sans-serif", //baver bodoni, serif
  //     color: colors.primary.color3,
  //   },
  //   body1: {
  //     fontFamily: "Arimo,sans-serif",
  //     fontSize: "13px",
  //     lineHeight: "1.75",
  //     color: "#000",
  //     fontWeight: "300",
  //   },
  //   body2: {
  //     fontSize: "26px",
  //     fontWeight: "700",
  //     marginTop: "1rem",
  //     marginBottom: "1rem",
  //     lineHeight: "0.2px",
  //     color: colors.primary.color6,
  //     fontFamily: "Playfair Display",
  //     mr: '2',
  //     "@media (min-width: 300px)": {
  //       display: "none"
  //     },
  //     "@media (min-width: 900px)": {
  //       display: "flex"
  //     }
  //   },
  //   subtitle1: {
  //     fontSize: 12
  //   },
  //   poster: {
  //     color: "red"
  //   }
  // }
});

export default theme;

