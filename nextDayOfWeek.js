const moment = require('moment');

const getNextDayofWeek = (day) => {
  const today = moment().isoWeekday();
  if (today <= day) {
    // is it before desired day? give me the day for THIS week
    return moment().isoWeekday(day);
  } else {
    // has desired day passed? give me the day for NEXT week
    return moment().add(1, 'weeks').isoWeekday(day);
  }
};

module.exports = getNextDayofWeek;
