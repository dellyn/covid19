import {
  SET_COUNTRY_DATA,
  SET_COUNTRY_STATS,
  SET_COUNTRIES_DATA,
  SET_GLOBAL_DATA,
} from "./actions";

const initialState = {
  countryData: null,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_DATA:
      return { ...state, globalData: action.payload };

    case SET_COUNTRY_DATA:
      return { ...state, countryData: action.payload };

    case SET_COUNTRIES_DATA:
      return { ...state, countriesData: action.payload };

    case SET_COUNTRY_STATS:
      return { ...state, countryStats: action.payload };

    default:
      return state;
  }
};
