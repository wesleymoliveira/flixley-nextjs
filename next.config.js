/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		modularizeImports: {
			'@mui/material': {
				transform: '@mui/material/{{member}}'
			},
			'@mui/icons-material': {
				transform: '@mui/icons-material/{{member}}'
			},
			'@mui/styles': {
				transform: '@mui/styles/{{member}}'
			},
			'@mui/lab': {
				transform: '@mui/lab/{{member}}'
			}
		}
	},
	swcMinify: true
};

module.exports = nextConfig;
