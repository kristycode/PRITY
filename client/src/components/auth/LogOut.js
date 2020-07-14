import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as authActionCreators from "../../actions/authActions";

class LogoutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(authActionCreators.logoutUser());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(LogoutPage);