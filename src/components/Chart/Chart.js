import { useSelector } from "react-redux";
import { Line, Pie } from "react-chartjs-2";
import Preloader from "../Preloader/Preloader";

export const ChartLine = () => {
  const stats = useSelector((state) => state.countryStats);

  if (!stats) return <Preloader />;

  const { confirmedArr, recoveredArr, deathArr, dateArr } = stats;

  return (
    <div className="clart-line chart">
      <Line
        data={{
          labels: dateArr,
          datasets: [
            {
              label: "Cases",
              data: confirmedArr,
              backgroundColor: "rgba(182, 255, 99, 0.2)",
              borderColor: "rgba(182, 255, 99, 1)",
              borderWidth: 1,
            },
            {
              label: "Deathes",
              data: deathArr,

              backgroundColor: "rgba(255, 99, 99, 0.2)",
              borderColor: "rgba(255, 99, 99, 1)",
              borderWidth: 1,
            },

            {
              label: "Recovered",
              data: recoveredArr,
              backgroundColor: "rgba(99, 255, 213, 0.2)",
              borderColor: "rgba(99, 255, 213, 1)",
              borderWidth: 1,
            },
          ],
        }}
        height={10}
        width={20}
        options={{
          maintainAspectRation: false,
        }}
      ></Line>
    </div>
  );
};

export const ChartPie = () => {
  const stats = useSelector((state) => state.globalData);
  const datasetArr = stats.map((data) => data.count);
  const labelsArr = stats.map((data) => data.title);

  return (
    <div className="chart-pie chart">
      <h2>Global Stats</h2>
      <Pie
        data={{
          labels: labelsArr,

          datasets: [
            {
              data: datasetArr,
              backgroundColor: [
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 159, 64, 0.4)",
                "rgba(153, 102, 255, 0.4)",
                "rgba(75, 192, 192, 0.4)",
                "rgba(255, 206, 86, 0.4)",
                "rgba(255, 99, 132, 0.4)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        }}
      ></Pie>
    </div>
  );
};
