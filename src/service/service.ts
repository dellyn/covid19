const url: string = process.env.REACT_APP_API_BASE!;
const summaryUrl = `${url}summary`;

const getResource = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, reсeived ${res.status}`);
  }
  return await res.json();
};

export const getSummary = async () => {
  const res = await getResource(summaryUrl);
  return transformSummaryData(res);
};
export const getCountries = async () => {
  const res = await getResource(summaryUrl);
  return transformCountriesData(res);
};

export const getCountryStatsFromDay = async (countryName: string) => {
  const configUrl = `${url}live/country/${countryName}/status/confirmed`;
  const res = await getResource(configUrl);

  return transformCountryStatsFromDay(res);
};

type SummaryDataType = {
  ID: string;
  Countries: GlobalInterface[];
  Global: GlobalInterface;
};
interface GlobalInterface {
  ID: string;
  Country: string;
}
interface CountryStats {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Date: string;
}

const transformCountriesData = (data: SummaryDataType) => {
  const { ...countries } = data.Countries;
  const arr = [];
  let max = 150,
    count = 0;

  for (let key in countries) {
    count++;
    const { ID, ...datas } = countries[key];

    if (count < max) {
      arr.push({
        ...datas,
      });
    }
  }
  return arr;
};
const transformCountryStatsFromDay = (data: CountryStats[]) => {
  const confirmedArr = [],
    recoveredArr = [],
    deathArr = [],
    dateArr = [];

  for (let i = 0; i < data.length; i++) {
    const { Confirmed, Recovered, Deaths, Date } = data[i];
    const configDate = Date.slice(0, 10);

    confirmedArr.push(Confirmed);
    recoveredArr.push(Recovered);
    deathArr.push(Deaths);
    dateArr.push(configDate);
  }
  return {
    confirmedArr,
    recoveredArr,
    deathArr,
    dateArr,
  };
};
const transformSummaryData = (data: any) => {
  const { ID, ...global } = data.Global;
  const arr = [];

  for (let key in global) {
    const configTitle = key.replace(/([A-Z]+)/g, " $1").trimStart();

    arr.push({
      title: configTitle,
      count: global[key],
    });
  }
  return arr;
};
