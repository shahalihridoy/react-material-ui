import React, { Component } from "react";
import "./app.scss";
import Sidenav from "./views/sidenav";
import MainContainer from "./views/main-container";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    sidenavState: "full",
    sidenavToggleChecked: false,
    isMobile: false
  };

  handleMenuClick = () => {
    let { sidenavState, isMobile } = this.state;
    if (sidenavState !== "close") {
      this.setState({ sidenavState: "close" });
    } else {
      if (isMobile) this.setState({ sidenavState: "mobile" });
      else this.setState({ sidenavState: "full" });
    }
  };

  handleSidebarMiniToggle = () => {
    let { sidenavState, sidenavToggleChecked, isMobile } = this.state;
    sidenavToggleChecked = !sidenavToggleChecked;

    if (isMobile) {
      if (sidenavState !== "close") {
        this.setState({ sidenavToggleChecked, sidenavState: "close" });
      } else this.setState({ sidenavToggleChecked, sidenavState: "mobile" });
    } else
      this.setState({
        sidenavToggleChecked,
        sidenavState: sidenavToggleChecked ? "compact" : "full"
      });
  };

  hadleMouseOver = () => {
    if (this.state.sidenavToggleChecked && !this.state.isMobile)
      this.setState({ sidenavState: "full" });
  };

  hadleMouseLeave = () => {
    if (this.state.sidenavToggleChecked && !this.state.isMobile)
      this.setState({ sidenavState: "compact" });
  };

  componentDidMount() {
    if (window.outerWidth < 680)
      this.setState({
        sidenavState: "close",
        isMobile: true
      });
  }

  getClassList = () => {
    let { sidenavState } = this.state;
    let classList = "app-container sidebar-";

    switch (sidenavState) {
      case "full":
        return (classList += "full");
      case "compact":
        return (classList += "compact");
      case "close":
        return (classList += "close");
      case "mobile":
        return (classList += "mobile");
      default:
        return;
    }
  };

  render() {
    return (
      <Router>
        <div className={this.getClassList()}>
          <div
            className="sidebar"
            onMouseOver={this.hadleMouseOver}
            onMouseLeave={this.hadleMouseLeave}
          >
            <Sidenav
              onSidebarMiniToggle={this.handleSidebarMiniToggle}
              sidenavToggleChecked={this.state.sidenavToggleChecked}
            />
          </div>
          <div className="container">
            <MainContainer onMenuClick={this.handleMenuClick} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
