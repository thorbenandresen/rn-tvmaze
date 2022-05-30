import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {ShowDetails} from '../models/show';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '../models/navigation';
import {FavsContext, FavsContextType} from '../contexts/favContext';
import ShowListItem from '../components/ShowListItem';

type Props = NativeStackScreenProps<ShowsStackParamList, 'Search'>;

const SearchScreen: React.FC<Props> = ({navigation}) => {
  const {favs, toggleFavs} = React.useContext(FavsContext) as FavsContextType;
  const data = Array.from(favs.values());

  const renderListItem = (item: ShowDetails) => {
    const isFav = favs.has(item.id);

    return (
      <ShowListItem
        item={item}
        isFav={isFav}
        onToggleFav={() => toggleFavs(item)}
        onPress={() => {
          navigation.navigate('Show Details', {
            show: item,
            isFav,
          });
        }}
      />
    );
  };

  const hasFavs = favs.size > 0;
  return (
    <View style={{flex: 1}}>
      {hasFavs ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderListItem(item)}
        />
      ) : (
        <Text> No Favs </Text>
      )}
    </View>
  );
};

export default SearchScreen;
