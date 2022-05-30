import React, {useState, useEffect} from 'react';
import {ShowDetails} from '../models/show';
import {mapReplacer, mapReviver} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FavsContextType = {
  favs: Map<number, ShowDetails>;
  toggleFavs: (show: ShowDetails) => void;
};

export const FavsContext = React.createContext<FavsContextType | null>(null);

type Props = {
  children: JSX.Element;
};

const INITIAL_VALUE = new Map();
const FavsProvider: React.FC<Props> = ({children}) => {
  const [favs, setFavs] = useState(INITIAL_VALUE);

  const toggleFavs = (show: ShowDetails) => {
    if (favs.has(show.id)) {
      setFavs(prev => {
        const newState = new Map(prev);
        newState.delete(show.id);
        return newState;
      });
    } else {
      setFavs(prev => new Map(prev.set(show.id, show)));
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('TVMAZEAPP::FAVS').then(value => {
      if (value) {
        setFavs(JSON.parse(value, mapReviver));
      }
    });
  }, []);

  useEffect(() => {
    if (favs !== INITIAL_VALUE) {
      AsyncStorage.setItem(
        'TVMAZEAPP::FAVS',
        JSON.stringify(favs, mapReplacer),
      );
    }
  }, [favs]);

  return (
    <FavsContext.Provider value={{favs, toggleFavs}}>
      {children}
    </FavsContext.Provider>
  );
};

export default FavsProvider;
