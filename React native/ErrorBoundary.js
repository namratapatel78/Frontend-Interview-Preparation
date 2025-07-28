import React from 'react';

class ErrorBoundary extends React.Component {


  constructor(props) {
    super(props)
    this.state = { hasError : false}
  }

  static getDerivedStateFromError (error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render () {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

export default ErrorBoundary;