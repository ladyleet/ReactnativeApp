import React, { Component } from 'react';

export class Stream extends Component {
  state = {
    value: null
  };

  subscribeToStream() {
    this.subscription = this.props.stream.subscribe(value => {
      this.setState({ value });
    });
  }

  componentDidMount() {
    this.subscribeToStream();
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stream !== this.props.stream) {
      this.subscription.unsubscribe();
      this.subscribeToStream();
    }
  }

  render() {
    return this.state.value;
  }
}

export function stream(stream) {
  return <Stream stream={stream} />;
}
