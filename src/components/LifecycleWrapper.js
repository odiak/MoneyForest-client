import {Component} from 'react';

export class LifecycleWrapper extends Component {
  componentDidMount() {
    const f = this.props.componentDidMount;
    if (typeof f === 'function') {
      f();
    }
  }

  componentDidUpdate() {
    const f = this.props.componentDidUpdate;
    if (typeof f === 'function') {
      f();
    }
  }

  render() {
    return this.props.children || null;
  }
}
