function Appointment(aptDate) {
  this.date = new Date(aptDate);
  this.location = "";
}

Appointment.prototype.setLocation = function (location) {
  this.location = location;
};

Appointment.prototype.getLocation = function () {
  return this.location;
};

Appointment.prototype.toString = function () {
  return `Appointment on ${this.date.toDateString()} at ${this.location}`;
};
