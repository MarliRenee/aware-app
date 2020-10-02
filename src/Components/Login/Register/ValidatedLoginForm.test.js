import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedLoginForm from './ValidatedLoginForm';

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidatedLoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})