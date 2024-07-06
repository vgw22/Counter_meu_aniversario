const eventDate = new Date("Mar 15, 2025 15:00:00");
const eventTimeStamp = eventDate.getTime();

const counter = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const untilEvent = eventTimeStamp - currentTimeStamp;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;

    const daysUntilEvent = Math.floor(untilEvent / days);
    const hoursUntilEvent = Math.floor((untilEvent % days) / hours);
    const minutesUntilEvent = Math.floor((untilEvent % hours) / minutes);
    const secondsUntilEvent = Math.floor((untilEvent % minutes) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (untilEvent < 0) {
        clearInterval(counter);
        document.getElementById('counter').innerHTML = `O aniversário passou`;
    }
}, 1000)