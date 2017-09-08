import React from 'react';

export const composeWithOnMount = (onMount, onUnmount, options = {}) => BaseComponent => (
  class extends React.PureComponent {
    constructor(props) {
      super(props);
      const forMount = options.onMount || 'componentDidMount';
      const forUnmount = options.onUnmount || 'componentWillUnmount';
      if (onMount) {
        this[forMount] = function () { onMount(this.props); };
      }
      if (onUnmount) {
        this[forUnmount] = function () { onUnmount(this.props); };
      }
    }
    render() {
      return (<BaseComponent {...this.props} />);
    }
  }
);
