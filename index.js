// var lastTime = new Date();
// var lastTimes = [];

var maxclicks = 0;
var clicks = 0;

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  }, false);

const button = document.addEventListener('click', async () => {
    let cps = document.getElementById('cps')
    let maxCPS = document.getElementById('maxCPS')
    let txt = cps.innerHTML
    let maxval = parseInt(maxCPS.innerHTML)
    clicks = clicks + 1;
    if (maxclicks < clicks) maxclicks = clicks;
    setTimeout(() => {
        clicks = clicks - 1;
    },1000);
})

setInterval(() => {
    document.getElementById('maxCPS').innerHTML = maxclicks;
    document.getElementById('cps').innerHTML = clicks;
}, 50);

!function() {
    function detectDevTool(allow) {
      if(isNaN(+allow)) allow = 100;
      var start = +new Date(); // Validation of built-in Object tamper prevention
      debugger;
      var end = +new Date(); // Validates too.
      if(isNaN(start) || isNaN(end) || end - start > allow) {
        window.close()
      }
    }
    if(window.attachEvent) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
          detectDevTool();
        window.attachEvent('onresize', detectDevTool);
        window.attachEvent('onmousemove', detectDevTool);
        window.attachEvent('onfocus', detectDevTool);
        window.attachEvent('onblur', detectDevTool);
      } else {
          setTimeout(argument.callee, 0);
      }
    } else {
      window.addEventListener('load', detectDevTool);
      window.addEventListener('resize', detectDevTool);
      window.addEventListener('mousemove', detectDevTool);
      window.addEventListener('focus', detectDevTool);
      window.addEventListener('blur', detectDevTool);
    }
  }();

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
