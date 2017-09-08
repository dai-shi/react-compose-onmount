react-compose-onmount
===================

[![Build Status](https://travis-ci.org/dai-shi/react-compose-onmount.svg?branch=master)](https://travis-ci.org/dai-shi/react-compose-onmount)
[![npm version](https://badge.fury.io/js/react-compose-onmount.svg)](https://badge.fury.io/js/react-compose-onmount)

A helper function to attach onmount handler to
stateless function components.

Background
----------

If you prefer to write a React components as a function
like the following, you tend to avoid using class-based components.

```javascript
const Hello = ({ name }) => (<div>Hello, {name}!</div>);
```

Function components lack local state, lifecycle methods, and so on.
Local state is sometimes important to keep UI state, for example,
a string in a text field while typing, which shouldn't be put in global state.
For the local state, [react-compose-state](https://github.com/dai-shi/react-compose-state) should help.
The second case is when you want to do something when a component appears.
For example, you might need to fetch data from network.
With class-based components, you can use the `componentDidMount` lifecycle method.
This package is for the specific case when you want to only attach
`componentDidMount` handler to a stateless function component.

Install
-------

```bash
npm install react-compose-onmount --save
```

Usage
-----

Basic usage:

```javascript
import React from 'react';
import { composeWithOnMount } from 'react-compose-onmount';

const onMount = () => window.alert('mount!');

const SomePage = composeWithOnMount(onMount)(() => (
  <div>
    <h1>Some Page</h1>
  </div>
));
```

With unmount:

```javascript
const onMount = () => window.alert('mount!');
const onUnmount = () => window.alert('unmount!');

const SomePage = composeWithOnMount(onMount, onUnmount)(() => (
  <div>
    <h1>Some Page</h1>
  </div>
));
```

With option:

```javascript
const onMount = () => window.alert('mount!');
const onUnmount = () => window.alert('unmount!');
const option = {
  onMount: 'componentWillMount',
  onUnmount: 'componentDidUnmount',
};

const SomePage = composeWithOnMount(onMount, onUnmount, option)(() => (
  <div>
    <h1>Some Page</h1>
  </div>
));
```

Example
-------

The [example](example) folder contains a working example.
You can run it with

```bash
PORT=8080 npm run example
```

and open <http://localhost:8080> in your web browser.
