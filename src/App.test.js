import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Switch, BrowserRouter as Router } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    // div.setAttribute('id', 'root');
    ReactDOM.render(
      <Router>
        <Switch>
            <App />
        </Switch>  
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
});
