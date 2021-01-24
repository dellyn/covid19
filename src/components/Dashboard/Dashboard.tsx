import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummary, getCountries } from "../../service/service";
import { setGlobalData, setCountriesData } from "../../redux/actions";
import { ChartPie } from "../Chart/Chart";
import CountriesSelect from "../CountriesSelect/CountriesSelect";
import Preloader from "../Preloader/Preloader";
import ErrorIndicator from "../Error/ErrorIndicator";
import ErrorBoundary from "../Error/ErrorBoundary";

import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  type GlobalDataType = {
    count: number;
    title: string;
  };
  interface RootState {
    globalData: GlobalDataType[];
  }
  const globalData = useSelector((state: RootState) => state.globalData);

  useEffect(() => {
    const syncExecution = async () => {
      await getSummary()
        .then((data: any) => {
          dispatch(setGlobalData(data));
        })
        .catch(() => {
          setError(true);
        });

      await getCountries()
        .then((data: any) => {
          dispatch(setCountriesData(data));
        })
        .catch(() => {
          setError(true);
        });

      setLoading(false);
    };
    syncExecution();
  }, []);

  if (loading && !error) return <Preloader />;
  else if (error) return <ErrorIndicator />;

  const gridList = globalData.map((data: GlobalDataType) => {
    const { title, count } = data;
    return (
      <div className="grid-square" key={title}>
        <div className="grid-square-content">
          <p className="title">{title}</p>
          <p className="count">{count}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="logo">Dashboard</h1>
        <div className="table">{gridList}</div>
        <div className="dashboard-flex">
          <ErrorBoundary>
            <CountriesSelect />
          </ErrorBoundary>
          <div className="word-grid grid">
            <ErrorBoundary>
              <ChartPie />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
