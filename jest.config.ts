import type { Config } from '@jest/types';
import { defaults } from 'jest-config';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' })

const config: Config.InitialOptions = {
	...defaults,
	collectCoverage: true,
	collectCoverageFrom: ['./**/*.test.ts(x)?'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest'
	},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/$1',
		'tests/(.*)': '<rootDir>/__tests__/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/utils/test/fileMock.ts',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
		'\\.svg': '<rootDir>/utils/test/svgMock.ts',
		'\\.stories.tsx': 'identity-obj-proxy'
	},
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
		'<rootDir>/utils/',
		'<rootDir>/stories/'
	],
	setupFilesAfterEnv: ['<rootDir>/utils/test/setupTests.ts'],
	snapshotSerializers: ['@emotion/jest/serializer'],
	moduleDirectories: ['node_modules', '<rootDir>'],
	modulePaths: ['<rootDir>']
};

export default createJestConfig(config);
