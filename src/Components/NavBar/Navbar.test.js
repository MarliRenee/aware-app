import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { BrowserRouter, Link } from 'react-router-dom'

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Navbar>
          <Link to='/dashboard'>Dashboard</Link>
        </Navbar>
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})