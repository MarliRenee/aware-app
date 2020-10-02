import React from 'react';
import ReactDOM from 'react-dom';
import PastIceberg from './PastIceberg';

describe('PastIceberg Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PastIceberg />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})