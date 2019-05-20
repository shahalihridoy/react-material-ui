import React, { Component } from "react";
import { Data } from "./data";

class MultilevelExpansionPanel extends Component {
  state = {};

  iterator = data => {
    data.map(item => {
      console.log(item.name);
      if (item.children) this.iterator(item.children);
      else return;
    });
  };

  render() {
    this.iterator(Data);
    return null;
  }
}

export default MultilevelExpansionPanel;
