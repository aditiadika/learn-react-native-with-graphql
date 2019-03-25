import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

export class Login extends Component {
  state = {
    register: true
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.register === true ? <CreateUser /> : <LoginUser />}
        <Button
          onPress={() => this.setState({ register: !this.state.register })}
          title={this.state.register ? 'Login' : 'Register'}
          style={{ marginBottom: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Login;
