import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Navigator from "./src/Navigator";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjsln73cr1wn80133gwoc5g4t"
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
