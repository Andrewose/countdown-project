const days = document.getElementById('days')
const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')



function updateCountdownTime() {
    const currentDay = new Date();

    const christmasTime = new Date(2022, 11, 25);

    const currentTime = currentDay.getTime();

    const christmasDay = christmasTime.getTime();
    
    let remTime = christmasDay - currentDay;
    
    const d = Math.floor(remTime / 1000 / 60 / 60 / 24);
    const h = Math.floor(remTime / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(remTime / 1000 / 60 ) % 60;
    const s = Math.floor(remTime / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML =h < 10 ? '0' + h : h;
    mins.innerHTML = m < 10 ? '0' + m : m;
    secs.innerHTML = s < 10 ? '0' + s : s;
    
}
setInterval(updateCountdownTime, 1000);