import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../service/service";
import { useHistory } from "react-router-dom";
import { setCountryData, setCountriesData } from "../../redux/actions";
import Preloader from "../Preloader/Preloader";

import Select from "react-select";

import "./CountriesSelect.scss";

// type CountryDataType = {
//   label: string;
//   value: string;
//   data: CountriesDataType;
// };
type CountriesDataType = {
  Country: string;
};
interface RootState {
  countriesData: any;
}
const CountriesSelect = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const countriesData = useSelector((state: RootState) => state.countriesData);

  useEffect(() => {
    getCountries().then((data: CountriesDataType[]) => {
      dispatch(setCountriesData(data));
    });
  }, []);

  const openCountry = (data: any) => {
    dispatch(setCountryData(data.data));
    history.push(`/covid19/country/${data.value}`);
  };

  const customStyles = {
    singleValue: () => {
      const color = "#fff";
      return { color };
    },
  };

  if (!countriesData) return <Preloader />;

  const listCountries = countriesData.map((country: CountriesDataType) => {
    const { Country } = country;

    return { value: Country, label: Country, data: country };
  });

  return (
    <div className="countries-select">
      <Select
        className="react-select"
        styles={customStyles}
        value={{ value: "Country", label: "Country" }}
        options={listCountries}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgb(29, 32, 41);",
          },
        })}
        onChange={(data) => openCountry(data)}
      />
    </div>
  );
};

export default CountriesSelect;
