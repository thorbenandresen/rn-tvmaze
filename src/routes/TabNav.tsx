import React from 'react';
import FavStack from './FavStack';
import SearchStack from './SearchStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const TabNav: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faMagnifyingGlass} color={color} size={21} />
          ),
        }}
        component={SearchStack}
      />

      <Tab.Screen
        name="Favourites"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faStar} color={color} size={21} />
          ),
        }}
        component={FavStack}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
