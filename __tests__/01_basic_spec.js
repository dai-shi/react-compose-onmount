/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { composeWithOnMount } from '../src/index';

describe('basic spec', () => {
  it('should have a compose function', () => {
    expect(composeWithOnMount).toBeDefined();
  });

  it('should compose a component with onmount', () => {
    const BaseComponent = () => (<div><h1>Base</h1></div>);
    const onmount = jest.fn();
    const ComposedComponent = composeWithOnMount(onmount)(BaseComponent);

    renderer.create(<ComposedComponent />);

    expect(onmount.mock.calls.length).toBe(1);
  });
});
