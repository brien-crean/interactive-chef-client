import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, FlatList, TouchableHighlight, Text, View } from 'react-native';
import config from '../lib/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';

class RecipeList extends Component {

  componentWillMount() {
    this.props.getRecipes();
  }

  renderRecipe = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight
        key={ item.id }
        onPress={() => navigate('RecipeDetailScreen', { recipe: item })}
        underlayColor='#99d9f4'
        style={ styles.recipeButtonContainer }
      >
        <View style={ styles.recipeButtonContent }>
          <Image
            style={ styles.image }
            source={{ uri: config.ROOT_URL + item.image.small.url }}
          />
          <Text style={ styles.recipeTitle }>{ item.title }</Text>
          <Icon name="chevron-right" size={17} color="grey" />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { recipes, recipesLoading } = this.props;
    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.title }>Recipes</Text>
        <View>
          {
            recipesLoading
              ? <ActivityIndicator size="large" color="0000ff" />
              : <FlatList data={ recipes } renderItem={ this.renderRecipe } />
          }
        </View>
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
  recipeButtonContainer: {
    width: Dimensions.width,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  recipeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.width,
  },
  image: {
    width: 50,
    height: 50,
  },
  recipeTitle: {
    fontSize: 16,
    padding: 10,
    flex: 1
  }
});

export default RecipeList;