import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

function Charts({ historicalData }) {
  const [data, setData] = useState([["Dates", "Prices"]]);

  useEffect(() => {
    let copydata = [["Dates", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item, index) => {
        const dateStr = new Date(item[0]).toLocaleDateString();
        const price = item[1];
        console.log("Row", index + 1, dateStr, price, typeof price);
        copydata.push([dateStr, price]);
      });
    }

    setData(copydata);
  }, [historicalData]);

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default Charts;
