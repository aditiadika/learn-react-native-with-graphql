import React, { Component } from "react";
import {  View, TextInput, StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Container, Text } from "native-base";

export default class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
        </Item>
        <Item floatingLabel>
          <Label>Body</Label>
          <Input
            multiline
            style={styles.body}
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
          />
        </Item>
        <Button rounded success full onPress={this.submitForm}>
          <Text>Submit</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: 150,
    textAlignVertical: "top"
  }
});
