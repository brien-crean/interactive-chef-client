import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import config from '../lib/config';

class RecipeDetail extends Component {
  render() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe', {});

    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.title }>{ recipe.title }</Text>
        <Text>{ recipe.description }</Text>
        <Image
          style={styles.image}
          source={{ uri: config.ROOT_URL + recipe.image.medium.url }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
  image: {
    width: 200,
    height: 200,
  }
});

export default RecipeDetail;