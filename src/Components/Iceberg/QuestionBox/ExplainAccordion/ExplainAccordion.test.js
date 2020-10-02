import React from 'react';
import ReactDOM from 'react-dom';
import ExplainAccordion from './ExplainAccordion';

describe('ExplainAccordion Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExplainAccordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})