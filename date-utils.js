const dateUtils = {
  // Function to calculate the difference between two dates
  calculateDateDifference: function (date1, date2) {
    const timeDifference = Math.abs(date1 - date2);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  },

  // Function to parse from UNIX date format to default date format
  parseUnixToDate: function (unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  },

  // Function to add an amount of time (in days) to a date
  addDaysToDate: function (date, daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate.toLocaleDateString();
  },

  // Function to convert from a date with GMT format to a specific time zone
  convertToTimeZone: function (date, timeZone) {
    const options = { timeZone: timeZone };
    return new Date(date).toLocaleString(undefined, options);
  },
};

// Example usage:
const date1 = new Date("2023-09-12T12:00:00Z");
const date2 = new Date("2023-09-15T12:00:00Z");
console.log(
  "Difference in days:",
  dateUtils.calculateDateDifference(date1, date2)
);

const unixTimestamp = 1631424000; // September 12, 2022
console.log("Parsed date:", dateUtils.parseUnixToDate(unixTimestamp));

const originalDate = new Date("2023-09-12T12:00:00Z");
const newDate = dateUtils.addDaysToDate(originalDate, 5);
console.log("New date after adding 5 days:", newDate);

const gmtDate = "2023-09-12T12:00:00Z";
const timeZone = "America/New_York";
console.log(
  "Date in New York time zone:",
  dateUtils.convertToTimeZone(gmtDate, timeZone)
);
