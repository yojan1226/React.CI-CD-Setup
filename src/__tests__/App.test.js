import { render , screen } from '@Testting-library/react';
import App from '../App';
import { expect } from 'vitest';

test('renders a components', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
})
