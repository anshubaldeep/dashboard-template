import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, message = "Something went wrong", ...rest } = this.props;
    if (error) {
      return (
        <p style={{ color: "red", margin: "auto" }} {...rest}>
          {message}
        </p>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
