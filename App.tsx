import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {showMessage, hideMessage} from 'react-native-flash-message';
import TabNav from './src/routes/TabNav';
import FavsProvider from './src/contexts/favContext';

const App: React.FC = () => {
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !state.isInternetReachable;
      if (offline) {
        showMessage({
          message: 'You Are Offline',
          autoHide: false,
          type: 'danger',
        });
      } else {
        hideMessage();
      }
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <NavigationContainer>
      <FavsProvider>
        <TabNav />
      </FavsProvider>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
