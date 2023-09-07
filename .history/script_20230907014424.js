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
console.log("Current day of the week:", today)