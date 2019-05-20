import React, { Component, Fragment } from "react";
import Header from "./header";
import Container from "./container";

class MainContainer extends Component {
  render() {
    let { onMenuClick } = this.props;
    return (
      <Fragment>
        <div style={{ position: "fixed", width: "100%" }}>
          <Header onMenuClick={onMenuClick} />
        </div>
        <div className="p-16 pt-70" style={{ minHeight: "calc(100vh - 86px)" }}>
          <Container />
        </div>
      </Fragment>
    );
  }
}

export default MainContainer;
