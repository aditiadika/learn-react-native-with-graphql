import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

import HeaderStyling from "./Header";

class PostDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      ...HeaderStyling
    };
  };

  render() {
    const { Post, loading, navigation } = this.props;
    if (loading) {
      return <ActivityIndicator style={{ justifyContent: "center" }} />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}> {Post.body} </Text>
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  bodyText: {
    fontSize: 16
  }
});

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(PostDetail);
