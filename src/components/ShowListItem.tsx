import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ShowDetails} from '../models/show';
import FavButton from './FavButton';

type Props = {
  item: ShowDetails;
  isFav: boolean;
  onToggleFav: () => void;
  onPress: () => void;
};

const ShowListItem: React.FC<Props> = ({item, isFav, onToggleFav, onPress}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 5,
      }}>
      <TouchableOpacity onPress={() => onPress()} style={{flex: 3}}>
        <Text style={{padding: 10, fontWeight: '400'}}>{item.name}</Text>
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FavButton isFav={isFav} onPress={() => onToggleFav()} />
      </View>
    </View>
  );
};

export default ShowListItem;
