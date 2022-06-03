import React from 'react';
import {render, screen} from '@testing-library/react';
import MoonPhase from "./MoonPhase";

test('renders learn react link', () => {
    render(<MoonPhase/>);
    const linkElement = screen.getByText(/Date in Jerusalem/i);
    expect(linkElement).toBeInTheDocument();
});