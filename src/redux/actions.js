export const SET_COUNTRY_DATA = "SET_COUNTRY_DATA";
export const SET_COUNTRY_STATS = "SET_COUNTRY_STATS";
export const SET_COUNTRIES_DATA = "SET_COUNTRIES_DATA";
export const SET_GLOBAL_DATA = "SET_GLOBAL_DATA";

export const setCountryData = (data) => {
  localStorage.setItem("countryData", JSON.stringify(data));
  return {
    type: SET_COUNTRY_DATA,
    payload: data,
  };
};

export const setCountryStats = (data) => {
  localStorage.setItem("countryStats", JSON.stringify(data));
  return {
    type: SET_COUNTRY_STATS,
    payload: data,
  };
};
export const setCountriesData = (data) => {
  return {
    type: SET_COUNTRIES_DATA,
    payload: data,
  };
};
export const setGlobalData = (data) => {
  return {
    type: SET_GLOBAL_DATA,
    payload: data,
  };
};
