import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

class RecipeList extends Component {

  componentWillMount() {
    this.props.getRecipes();
  }

  renderRecipes = (recipes) => {
    return (
      recipes.map(recipe => <Text>{ recipe.title }</Text>)
    );
  }

  render() {
    const { recipes, recipesLoading } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Recipes</Text>
        <View>
          {
            recipesLoading ? <ActivityIndicator size="large" color="0000ff" /> : this.renderRecipes(recipes)
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
  }
});

export default RecipeList;