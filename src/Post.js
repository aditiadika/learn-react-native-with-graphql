import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import { List, ListItem, Body, Right, Icon } from "native-base";
import HeaderStyling from "./Header";

import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

class Post extends Component {
  static navigationOptions = {
    title: "Post",
    ...HeaderStyling
  };

  render() {
    const { allPosts, loading, navigation } = this.props;
    if (loading) {
      return <ActivityIndicator style={{ justifyContent: "center" }} />;
    }
    return (
      <View>
        <List>
          <FlatList
            data={allPosts}
            keyExtractor={data => data.id}
            renderItem={({ item }) => (
              <ListItem
                onPress={() =>
                  navigation.navigate("PostDetails", {
                    id: item.id,
                    title: item.title
                  })
                }
              >
                <Body>
                  <Text>{item.title}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward"/>
                </Right>
              </ListItem>
            )}
          />
        </List>
      </View>
    );
  }
}

const postsQuery = gql`
  query postsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      title
    }
  }
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Post);
