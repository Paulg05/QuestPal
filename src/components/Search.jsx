import React, { Component } from "react";
import { Route } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questType: "Question Type",
      input: ""
    };
  }
  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.questType}
          onChange={this.handleChange}
          openImmediately={true}
        >
          <MenuItem value={"General"} primaryText="General" />
          <MenuItem value={"Algorithm"} primaryText="Algorithm" />
          <MenuItem value={"System Design"} primaryText="System Design" />
        </DropDownMenu>
        <TextField
          hintText="KeyWord Search"
          errorText="This field is required"
        />
        <RaisedButton label="Search" primary={true} />
      </div>
    );
  }
}
