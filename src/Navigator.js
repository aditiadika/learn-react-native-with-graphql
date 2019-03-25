import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Fab, Icon } from "native-base";

import Post from "./Post";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import Login from './users/Login'

import HeaderStyling from "./Header";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    ...HeaderStyling
  };

  render() {
    return (
      <View style={styles.container}>
        <Post {...this.props} />
        <Fab
          onPress={() => this.props.navigation.navigate("NewPost")}
          style={{ backgroundColor: "#25D366" }}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  newPost: {
    backgroundColor: "#82D8D8",
    padding: 20
  },
  newPostText: {
    fontSize: 20,
    textAlign: "center"
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  PostDetails: {
    screen: PostDetail
  },
  NewPost: {
    screen: NewPost
  }
});

const NewWrapper = props => {
  return <Login />
}

export default NewWrapper

// export default createAppContainer(AppNavigator);
