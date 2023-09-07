const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const UTCtimeStamp = now.getTime();
const GMTdate_and_time = now.toUTCString();
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

console.log("UTCtimeStamp:", UTCtimeStamp)
console.log("GMTdate_and_time:", GMTdate_and_time)
