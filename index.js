// var lastTime = new Date();
// var lastTimes = [];

var maxclicks = 0;
var clicks = 0;

const button = document.addEventListener('click', async () => {
    let cps = document.getElementById('cps')
    let maxCPS = document.getElementById('maxCPS')
    let txt = cps.innerHTML
    let maxval = parseInt(maxCPS.innerHTML)
    if (!txt) {
    cps.innerHTML = 1
    maxCPS.innerHTML = 1
    if (maxval < parseInt(cps.innerHTML)) {
        maxCPS.innerHTML = parseInt(cps.innerHTML)
        maxclicks = parseInt(cps.innerHTML)
    }
    } else {
        cps.innerHTML = parseInt(cps.innerHTML)+1
        if (maxval < parseInt(cps.innerHTML)) {
            maxCPS.innerHTML = parseInt(cps.innerHTML)
            maxclicks = parseInt(cps.innerHTML)
        }
    }
// if (maxval < parseInt(cps.innerHTML)) {
//     maxCPS.innerHTML = parseInt(cps.innerHTML)
// }
setTimeout(()=>{cps.innerHTML = cps.innerHTML - 1},1000);
    // lastTimes.push(Math.round(cps(countTime(lastTime))))
    // lastTime = new Date()
})

setTimeout(() => {
    document.getElementById('maxCPS').innerHTML = maxclicks
}, 50);

// function countTime(oldDate) {
//     let difference = new Date() - oldDate
//     return difference;
// }

// function cps(ms) {
//     return 1/ms*1000;
// }

// setInterval(() => {
//     let ans = average(lastTimes)
//     document.getElementById('cps').innerHTML = ans
//     lastTimes = [];
// }, 1000);

// setInterval(() => {
//     let ans = average(lastTimes)
//     if (!ans) {ans = 0}
//     document.getElementById('cps').innerHTML = Math.round(ans)
// }, 250);

// function average(times) {
//     var averageAnswer = 0;
//     for (let i = 0; i < times.length; i++) {
//         averageAnswer = averageAnswer + times[i]
//     }
//     averageAnswer = averageAnswer/times.length
//     // return averageAnswer;
//     return times.length;
// }

