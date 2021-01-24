import React, { Component } from "react";
import ErrorIndicator from "./ErrorIndicator";

import "./Error.scss";

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return this.props.children;
  }
}
