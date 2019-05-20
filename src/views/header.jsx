import React, { Fragment, Component } from "react";
import {
  Toolbar,
  Button,
  AppBar,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  render() {
    let { onMenuClick } = this.props;
    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton className="white" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="white">
            Material UI
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
