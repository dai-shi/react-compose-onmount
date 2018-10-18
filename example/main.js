/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import { composeWithOnMount } from '../src/index';

const onMount = ({ name }) => window.alert(`mounted: name=${name}`);
const Hello = composeWithOnMount(onMount)(({ name }) => (
  <div>
    <p>
      Hello
      {name}
    </p>
  </div>
));

let hidden = true; // easy global state
const toggle = () => {
  hidden = !hidden;
  renderApp(); // eslint-disable-line no-use-before-define
};

const App = () => (
  <div>
    <h1>Mount test</h1>
    <button type="button" onClick={toggle}>{hidden ? 'show' : 'hide'}</button>
    {!hidden && <Hello name="world" />}
  </div>
);

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('content'));
};
renderApp();
