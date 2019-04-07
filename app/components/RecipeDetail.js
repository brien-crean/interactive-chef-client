import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';
import config from '../lib/config';

class RecipeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: [
        'Preheat oven to 350 degrees F (175 degrees C).',
        'Fill a large pot with lightly salted water and bring to a rolling boil over high heat.',
        'Once the water is boiling, add the lasagna noodles a few at a time, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 10 minutes. Remove the noodles to a plate.',
        'Place the ground beef into a skillet over medium heat, add the garlic, garlic powder, oregano, salt, and black pepper to the skillet. Cook the meat, chopping it into small chunks as it cooks, until no longer pink, about 10 minutes. Drain excess grease.',
        'In a bowl, mix the cottage cheese, eggs, and Parmesan cheese until thoroughly combined.',
        'Place 4 noodles side by side into the bottom of a 9x13-inch baking pan; top with a layer of the tomato-basil sauce, a layer of ground beef mixture, and a layer of the cottage cheese mixture. Repeat layers twice more, ending with a layer of sauce; sprinkle top with the mozzarella cheese. Cover the dish with aluminum foil.',
        'Bake in the preheated oven until the casserole is bubbling and the cheese has melted, about 30 minutes. Remove foil and bake until cheese has begun to brown, about 10 more minutes. Allow to stand at least 10 minutes before serving.'
      ],
    };
  }
  render() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe', {});

    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.title }>{ recipe.title }</Text>
        <View style={ styles.contentContainer }>
          <Text style={ styles.description }>{ recipe.description }</Text>
          <Image
            style={ styles.image }
            source={{ uri: config.ROOT_URL + recipe.image.medium.url }}
            />
          </View>
        <ScrollView>
          <View style={styles.stepsContainer}>
            {
              this.state.steps.map((step, index) => {
                return (
                  <View key={index} style={{ width: Dimensions.width, paddingBottom: 10}}>
                    <Text style={styles.steps}>{`${index + 1}. ${step}`}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
  stepsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
  description: {
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
  steps: {
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10
  }
});

export default RecipeDetail;