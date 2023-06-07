import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface theme {
        status: {
            danger:string
        }
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color']
        }
    }
    interface TypographyVariants {
        poster: React.CSSProperties;
    }
    interface PaletteOptions {
        primary: PaletteColorOptions;
    }
    interface Breakpoints {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    }
}