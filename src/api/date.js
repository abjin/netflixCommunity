export const date = () => {
  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    hours: today.getHours(),
    minutes: today.getMinutes(),
  };
  let timestring = `${time.month}/${time.date} ${time.hours}:${time.minutes}`;
  return timestring;
};
