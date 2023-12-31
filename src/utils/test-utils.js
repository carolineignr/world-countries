import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';

export function renderWithRedux(component) {
  return render(<Provider store={store}>{component}</Provider>);
}