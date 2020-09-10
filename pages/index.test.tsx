import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index'

describe('Index', () => {
  test('renders Index page', () => {
    render(<IndexPage />);
  });
});

