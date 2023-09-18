const appointments = [
  [
    { start: "09:30", duration: "60" },
    { start: "10:30", duration: "30" },
    { start: "12:00", duration: "60" },
    { start: "14:00", duration: "30" },
    { start: "15:00", duration: "30" },
    { start: "15:30", duration: "90" },
  ],
];

const getAppointmentTime = (time) => {
  let minutes = 0;
  minutes = Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
  return minutes;
};

const getTimeSlots = () => {
  let slotsCounter = 0;
  for (let index = 0; index < appointments[0].length; index++) {
    const currentAppointment =
      getAppointmentTime(appointments[0][index].start) +
      Number(appointments[0][index].duration);

    if (index + 1 < appointments[0].length) {
      const nextAppointment = getAppointmentTime(
        appointments[0][index + 1].start
      );

      if (currentAppointment < nextAppointment) {
        const timeDiff = nextAppointment - currentAppointment;
        slotsCounter += timeDiff / 30;
      }
    }
  }
  return slotsCounter;
};

const timeSlots = getTimeSlots();
console.log("timeSlots", timeSlots);
