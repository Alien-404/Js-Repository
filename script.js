function clocks() {
    let H = document.querySelector('.H');
    let M = document.querySelector('.M');
    let S = document.querySelector('.S');
    let text = document.querySelector('.time-info');
    // get the time
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let second = new Date().getSeconds();
    // improve time by adding "0" in front
    minutes = fixTime(minutes);
    second = fixTime(second);
    // change to DOM
    H.innerHTML = hours;
    M.innerHTML = minutes;
    S.innerHTML = second;
    // Condition AM && PM
    if (hours < 12) {
        text.innerHTML = 'AM';
    } else {
        text.innerHTML = 'PM';
        H.innerHTML = hours - 12;
    }
}
// function fixTime
function fixTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
// start the clock
let start = setInterval(clocks, 1000);


