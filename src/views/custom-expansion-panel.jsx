import React, { Component } from "react";
import TouchRipple from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Data } from "./data";

const styles = theme => ({
  parent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "16px"
  },
  expandIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(90deg)"
  },
  collapseIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)"
  }
});

class CustomExpansionPanel extends Component {
  state = {
    collapsed: true
  };

  handleClick = () => {
    let { collapsed } = this.state;
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    let { collapsed } = this.state;
    let { classes, children } = this.props;
    return (
      <div>
        <TouchRipple className={classes.parent} onClick={this.handleClick}>
          <div>MY RIPPLING DIV</div>
          <div
            className={collapsed ? classes.collapseIcon : classes.expandIcon}
          >
            <ChevronRight />
          </div>
        </TouchRipple>
        <TouchRipple className={classes.parent}>{children}</TouchRipple>
      </div>
    );
  }
}

export default withStyles(styles)(CustomExpansionPanel);
