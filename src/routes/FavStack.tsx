import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavScreen from '../screens/FavScreen';
import DetailsScreen from '../screens/DetailScreen';

const FavStack = createNativeStackNavigator();

export default function FavStackScreen() {
  return (
    <FavStack.Navigator>
      <FavStack.Screen name="Favourite Shows" component={FavScreen} />
      <FavStack.Screen name="Show Details" component={DetailsScreen} />
    </FavStack.Navigator>
  );
}
