export const options = (type, dates) => {
  if (type === "line") {
    return {
      chart: {
        type: "line",
        // toolbar: false,
      },
      xaxis: {
        categories: dates,
      },
    };
  } else
    return {
      chart: {
        stacked: true,
        // toolbar: false,
      },
      xaxis: {
        categories: dates,
      },
      dataLabels: {
        enabled: false,
      },
    };
};
