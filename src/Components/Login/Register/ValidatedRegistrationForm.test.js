import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedRegistrationForm from './ValidatedRegistrationForm';

describe('Registration Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidatedRegistrationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})