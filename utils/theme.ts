import { createTheme } from '@mui/material/styles';
import { brand } from './colors';

const typography = {
	fontFamily: 'neue-haas-grotesk-display, "Helvetica", "Arial", "sans-serif"',
	fontSize: 14,
	fontWeightRegular: 500
};

export const theme = {
	typography,
	brand,
	palette: {
		primary: {
			main: brand.primaryA
		},
		secondary: {
			main: brand.primaryB
		},
		error: {
			main: brand.negative
		},
		warning: {
			main: brand.warning
		},
		info: {
			main: brand.accent
		},
		success: {
			main: brand.green400,
			light: brand.green50,
			contrastText: brand.green200
		},
		background: {
			default: brand.backgroundPrimary,
			paper: brand.backgroundSecondary
		},
		text: {
			primary: brand.contentPrimary,
			secondary: brand.contentSecondary,
			disabled: brand.grey400,
			auxText: brand.grey500,
			hint: brand.grey600
		}
	},
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					color: brand.contentAccent
				}
			}
		}
	}
};

declare module '@mui/material/styles' {
	interface Theme {
		brand: typeof brand;
	}
	interface ThemeOption {
		brand?: typeof brand;
	}
}

export default createTheme(theme);
