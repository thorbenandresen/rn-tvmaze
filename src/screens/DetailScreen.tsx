import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {FavsContext, FavsContextType} from '../contexts/favContext';
import FavButton from '../components/FavButton';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '../models/navigation';

type Props = NativeStackScreenProps<ShowsStackParamList, 'Show Details'>;

const ShowDetailsScreen: React.FC<Props> = ({route}) => {
  const {show} = route.params;
  const {favs, toggleFavs} = React.useContext(FavsContext) as FavsContextType;
  const isFav = favs.has(show.id);

  const renderHeading = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={{flex: 3}}>
          <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
            {show.name}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FavButton isFav={isFav} onPress={() => toggleFavs(show)} />
        </View>
      </View>
    );
  };

  const renderDetailRow = (label: string, value: string) => {
    return (
      <Text style={{paddingTop: 10}}>
        <Text style={{fontWeight: 'bold'}}>{label}: </Text>
        <Text>{value}</Text>
      </Text>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
      }}>
      {renderHeading()}
      {show.genres.length > 0 &&
        renderDetailRow('Genre', show.genres.join(', '))}
      {show.language && renderDetailRow('Language', show.language)}
      {show.runtime &&
        renderDetailRow('Runtime in Min', show.runtime.toString())}
      {show.status && renderDetailRow('Ended', show.status)}
      {show.summary &&
        renderDetailRow('Summary', show.summary.replace(/(<([^>]+)>)/gi, ''))}
      {/* regex removes html tags from summary string */}
    </ScrollView>
  );
};

export default ShowDetailsScreen;
