import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

type Props = {
  hasQueryText: boolean;
  hasResults: boolean;
  error: Error;
  isLoading: boolean;
};

const ListStates: React.FC<Props> = ({
  hasQueryText,
  hasResults,
  error,
  isLoading,
}) => {
  const renderText = (text: string) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#505050', fontWeight: '300'}}>{text}</Text>
      </View>
    );
  };

  if (hasQueryText) {
    return renderText('Type to Search Shows');
  } else if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  } else if (error) {
    return renderText(`An Error occured: ${error.message}`);
  } else if (!hasResults) {
    return renderText('No results found');
  } else {
    return null;
  }
};

export default ListStates;
