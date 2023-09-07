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

const dropdowns = document.querySelectorAll('.dropdown');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentUTCTime"]');
currentDayOfTheWeek.innerHTML = today
console.log(currentDayOfTheWeek.innerHTML)

const currentUTCtimeStamp = document.querySelector('[data-testid="currentUTCtimeStamp"]');
currentUTCtimeStamp.innerHTML =  `UTC: ${UTCtimeStamp}`




dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        select.classList.toggle('caret-rotate');
        selected.classList.toggle('selected-rotate');
        menu.classList.toggle('menu-open');
    })

    // options.forEach(option => {
    //     option.addEventListener('click', () => {
    //         // select.classList.toggle('select-clicked');
    //         select.classList.remove('select-clicked')
    //         caret.classList.remove('caret-rotate');
    //         menu.classList.remove('menu-open');

            
    //     })
    // })
})