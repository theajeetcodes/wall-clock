const handhour = document.querySelector(".hour");
const handminute = document.querySelector(".minute");
const handsecond = document.querySelector(".second");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


 const secondDeg = seconds * 6;
 const minuteDeg = minutes * 6;
 const hourDeg = (hours % 12) * 30 + (minutes * 0.5);

 handsecond.style.transform =
 `translate(-50%, -100%) rotate(${secondDeg}deg)`;

 handminute.style.transform =
 `translate(-50%, -100%) rotate(${minuteDeg}deg)`;

 handhour.style.transform =
 `translate(-50%, -100%) rotate(${hourDeg}deg)`;

}

updateClock();
setInterval(updateClock, 1000);