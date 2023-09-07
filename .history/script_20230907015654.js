const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const today = daysOfWeek[day];
const UTC = now.getUTCMilliseconds();
console.log("Current day of the week:", today)
console.log("UTC:", UTC)