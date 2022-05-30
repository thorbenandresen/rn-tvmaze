import {ShowDetails} from './show';

export type ShowsStackParamList = {
  Search: undefined;
  'Show Details': {show: ShowDetails; isFav: boolean};
};
