import React, { Component } from "react";
import { Text, View } from "react-native";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import UserForm from "./UserForm";

export class LoginUser extends Component {
  loginUser = async ({ email, password }) => {
    try {
      const signin = await this.props.signinUser({
        variables: { email, password }
      });
      console.log(signin.data.signinUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <Text>Login User</Text>
        <UserForm type="Login" onSubmit={this.loginUser} />
      </View>
    );
  }
}

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export default graphql(signinUser, { name: "signinUser" })(LoginUser);
