import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import useSWR from 'swr';
import {Show, ShowDetails} from '../models/show';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '../models/navigation';
import {FavsContext, FavsContextType} from '../contexts/favContext';
import ShowListItem from '../components/ShowListItem';
import SearchBar from '../components/SearchBar';
import ListStates from '../components/ListStates';

const API_ENDPOINT = 'https://api.tvmaze.com/search/shows?q=';

type Props = NativeStackScreenProps<ShowsStackParamList, 'Search'>;

const SearchScreen: React.FC<Props> = ({navigation}) => {
  const [query, setQuery] = useState('');
  const fetcher = (url: string) =>
    fetch(url).then(res => res.json()) as unknown as Show[];

  const {data, error} = useSWR(`${API_ENDPOINT}${query}`, fetcher);

  const {favs, toggleFavs} = React.useContext(FavsContext) as FavsContextType;

  const renderSearchHeader = () => {
    return (
      <SearchBar query={query} onChange={queryText => setQuery(queryText)} />
    );
  };

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

  const renderListStates = () => {
    const hasQueryText = query === '';
    const hasResults = data !== undefined && data.length > 0;
    const isLoading = !error && !data;
    return (
      <ListStates
        hasQueryText={hasQueryText}
        hasResults={hasResults}
        error={error}
        isLoading={isLoading}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderSearchHeader()}
      {renderListStates()}
      <FlatList
        data={data}
        keyExtractor={item => item.show.id.toString()}
        renderItem={({item}) => renderListItem(item.show)}
      />
    </View>
  );
};

export default SearchScreen;
