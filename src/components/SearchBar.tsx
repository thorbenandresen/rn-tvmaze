import React from 'react';
import {View, TextInput} from 'react-native';

type Props = {
  query: string;
  onChange: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({query, onChange}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          defaultValue={query}
          onChangeText={queryText => onChange(queryText)}
          placeholder="Search"
          returnKeyType="search"
          style={{backgroundColor: '#fff', paddingHorizontal: 20}}
        />
      </View>
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#c8c8c8',
        }}
      />
    </View>
  );
};

export default SearchBar;
