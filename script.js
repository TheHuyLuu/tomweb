//Date Counter
function updateLifeCounter() {
    const birthday = new Date(1999, 10, 7); // 7/11/1999
    const now = new Date();

    let diff = now - birthday; // milliseconds

    // Tính số ngày
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Tính chính xác đến năm, tháng, ngày, giờ, phút, giây
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();
    let hours = now.getHours() - birthday.getHours();
    let minutes = now.getMinutes() - birthday.getMinutes();
    let seconds = now.getSeconds() - birthday.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

// định dạng 2 chữ số
    const pad = (num) => num.toString().padStart(2, '0');
   const text = `${pad(years)}Y-${pad(months)}M-${pad(days)}D-${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    document.getElementById("counter").textContent = text;
}

setInterval(updateLifeCounter, 1000);
updateLifeCounter();
