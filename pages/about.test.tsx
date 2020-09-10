import React from 'react'
import { render } from '@testing-library/react'
import About from './about'

describe('About', () => {
  test('renders About page', () => {
    render(<About />);
  });
});