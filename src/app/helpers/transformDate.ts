export const transformDate = (date: Date): string => {
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (day < '10') {
    day = '0' + day;
  }
  if (month < '10') {
    month = '0' + month;
  }

  return `${month}/${day}/${year}`;
};
