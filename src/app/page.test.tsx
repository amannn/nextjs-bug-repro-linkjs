import React from 'react';
import {it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from './page';

it('should render', () => {
  render(<Home />);
  screen.debug();
});
