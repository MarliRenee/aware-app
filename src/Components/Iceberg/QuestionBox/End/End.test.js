import React from 'react';
import ReactDOM from 'react-dom';
import End from './End';

describe('End Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<End />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})