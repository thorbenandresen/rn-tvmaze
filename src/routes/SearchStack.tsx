import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailScreen';

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search Shows" component={SearchScreen} />
      <SearchStack.Screen name="Show Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}
