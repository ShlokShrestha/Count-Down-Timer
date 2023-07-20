function time() {
    const end = new Date("May 2 2024 6:00 AM").getTime();
    const current = new Date().getTime();
    const diff = (end - current);

    var day = Math.floor(diff / 1000 / 60 / 60 / 24);
    var hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    var min = Math.floor(diff / 1000 / 60) % 60;
    var sec = Math.floor(diff / 1000) % 60;

    document.querySelector(".day").innerText = day;
    document.querySelector(".hour").innerText = hour;
    document.querySelector(".min").innerText = min;
    document.querySelector(".sec").innerText = sec;
};

setInterval(time,1000);