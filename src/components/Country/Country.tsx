import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryStatsFromDay } from "../../service/service";
import { setCountryStats } from "../../redux/actions";
import { ChartLine } from "../Chart/Chart";
import Preloader from "../Preloader/Preloader";

import "./Country.scss";

interface RootState {
  countryData: any;
  countryStats: any;
}
const pathToBack: string = "http://localhost/covid19/dashboard";

const Country = () => {
  const dispatch = useDispatch();

  const localStorageData: string = localStorage.getItem("countryData")!;
  const countryData =
    useSelector((state: RootState) => state.countryData) ||
    JSON.parse(localStorageData);

  useEffect(() => {
    const countryName: string = countryData.Slug;

    getCountryStatsFromDay(countryName).then((data) => {
      dispatch(setCountryStats(data));
    });
  }, [countryData]);

  if (!countryData) return <Preloader />;
  const { Country: countryName } = countryData;

  return (
    <div className="country">
      <div className="container">
        <h1 className="country-title">{countryName}</h1>
        <a href={pathToBack} className="link">
          Back
        </a>
        <ChartLine />
      </div>
    </div>
  );
};

export default Country;
