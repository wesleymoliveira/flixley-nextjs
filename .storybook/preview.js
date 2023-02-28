import React from 'react';
import Router from 'next/router';
import * as NextImage from 'next/image';
import { ThemeProvider } from '@emotion/react';
import { action } from '@storybook/addon-actions';
import CssBaseline from '@mui/material/CssBaseline';
import '@storybook/addon-console';
import theme from '@/utils/theme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: props => <OriginalNextImage {...props} unoptimized />
});

const actionWithPromise = e => {
	action('link clicked')(e);
	return new Promise((resolve, reject) => resolve());
};

Router.router = {
	push: actionWithPromise,
	replace: actionWithPromise,
	prefetch: actionWithPromise
};


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	)
];