const baseUrl = 'https://api.punkapi.com/v2/';

export const API_BEER_LIST = baseUrl + 'beers/';
export const API_BEER_ITEM = 
  (id: number): string => API_BEER_LIST + `${id}/`;