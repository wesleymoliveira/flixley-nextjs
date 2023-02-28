import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Test } from './Test';

export default {
	title: 'Test',
	component: Test
} as ComponentMeta<typeof Test>;

export const Default: ComponentStory<typeof Test> = () => <Test />;
