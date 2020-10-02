import React from 'react';
import ReactDOM from 'react-dom';
import Iceberg from './Iceberg';

describe('Iceberg Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Iceberg />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})