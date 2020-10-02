import React from 'react';
import ReactDOM from 'react-dom';
import QuestionBox from './QuestionBox';

describe('Question Box Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuestionBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})