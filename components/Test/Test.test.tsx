import { render, screen } from '@testing-library/react';

import { Test } from './Test';

describe('<Test />', () => {
	it('should render the component', () => {
		const { container } = render(<Test />);

		expect(screen.getByTestId(/test/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
