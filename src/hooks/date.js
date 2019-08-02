const dateConverter = (date, refer) => {
  let monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let d = new Date(date);
  let curDate;
  if (refer === "month") {
    let day = date.split("-");
    curDate = `${monthArr[d.getMonth()]} ${day[2]}`;
    return curDate;
  }
  if (refer === "day") {
    curDate = dayArr[d.getDay()];
    return curDate;
  }
};

export default dateConverter;
