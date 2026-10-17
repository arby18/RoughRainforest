// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughRainforest title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughRainforest/i);
    expect(titleElement).toBeInTheDocument();
});
