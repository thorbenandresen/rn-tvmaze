import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

type Props = {
  isFav: boolean;
  onPress: () => void;
};

const FavButton: React.FC<Props> = ({isFav, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.7}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ececec',
        height: 40,
        width: 40,
        borderRadius: 20,
      }}>
      <FontAwesomeIcon icon={faStar} color={isFav ? '#C29B0C' : 'gray'} />
    </TouchableOpacity>
  );
};

export default FavButton;
