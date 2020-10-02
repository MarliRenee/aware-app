import React from 'react';
import ReactDOM from 'react-dom';
import ArchiveIceberg from './ArchiveIceberg';

describe('ArchiveIceberg Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArchiveIceberg />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})