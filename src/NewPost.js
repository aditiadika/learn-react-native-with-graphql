import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import PostForm from "./PostForm";
import HeaderStyling from "./Header";

class NewPost extends Component {
  static navigationOptions = {
    title: "New Post",
    ...HeaderStyling
  };

  state = { loading: false };

  newPost = ({ title, body }) => {
    this.setState({ loading: true });
    const { newPost, navigation } = this.props;
    newPost({
      variables: {
        title,
        body
      }
    })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        this.setState({ loading: true });
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <PostForm onSubmit={this.newPost} />
        )}
      </View>
    );
  }
}

const newPost = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: "newPost",
  options: {
    refetchQueries: ["postsQuery"]
  }
})(NewPost);
