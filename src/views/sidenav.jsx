import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Switch } from "@material-ui/core";

class Sidenav extends Component {
  render() {
    let {
      openSidenav,
      onMenuClick,
      onSidebarMiniToggle,
      sidenavToggleChecked
    } = this.props;

    return (
      <div
        style={{
          position: "fixed",
          height: "100vh",
          background: "#ccc",
          width: "220px"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Switch
            checked={sidenavToggleChecked}
            onChange={onSidebarMiniToggle}
            value="checkedB"
            color="secondary"
          />
        </div>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          <Link to="/users" style={{ textDecoration: "none" }}>
            <ListItem button key="user">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>User</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Sidenav;
