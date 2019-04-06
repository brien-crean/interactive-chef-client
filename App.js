import React, { Component } from "react";
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import RecipeListScreen from './app/containers/RecipeListScreen';
import RecipeDetailScreen from './app/containers/RecipeDetailScreen';

// supress Yellowbox warnings in DEBUG
console.disableYellowBox = true;

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

const Routes = createStackNavigator(
  {
    RecipeListScreen: RecipeListScreen,
    RecipeDetailScreen: RecipeDetailScreen,
  }
);

const AppContainer = createAppContainer(Routes);