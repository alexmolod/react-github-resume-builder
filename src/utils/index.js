export const getFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  const memberFrom = new Date(date).toLocaleString("uk-UA", options);

  return memberFrom;
};

export const sumObjectsByKey = (dataArray) =>
  dataArray.reduce((a, b) => {
    for (let k in b) {
      if (Object.prototype.hasOwnProperty.call(b, k)) a[k] = (a[k] || 0) + b[k];
      // if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});

export const getPercentage = (partialValue, totalValue) =>
  ((100 * partialValue) / totalValue).toFixed(2);
