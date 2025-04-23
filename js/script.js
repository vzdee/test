const DaysEl = document.getElementById('Days');
const HoursEl = document.getElementById('Hours');
const MinutesEl = document.getElementById('Minutes');
const SecondsEl = document.getElementById('Seconds');

const targetDate = new Date('May 25 2025 20:00:00').getTime();

function timer(){
    const currentDate = new Date().getTime();
    const remaining = targetDate - currentDate;
    
    const days = Math.floor(remaining / 1000 / 60 / 60 / 24);
    const hours = Math.floor(remaining / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(remaining / 1000 / 60) % 60;
    const seconds = Math.floor(remaining / 1000 ) % 60;

    DaysEl.innerHTML = days;
    HoursEl.innerHTML = hours;
    MinutesEl.innerHTML = minutes;
    SecondsEl.innerHTML = seconds;

    if(remaining < 0){
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
    }
}

setInterval(timer, 1000);

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnWhatsApp");
  
    btn.addEventListener("click", function () {
      const url = "https://wa.me/529993596943?text=¡Quiero%20Participar%20en%20el%20Sorteo!%20🥳🤚";
      window.open(url, "_blank"); // abre en nueva pestaña
    });
  });