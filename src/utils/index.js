export const getFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  };

  const memberFrom = new Date(date).toLocaleString('uk-UA', options);

  return memberFrom;
}