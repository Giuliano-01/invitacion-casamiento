export const getTodayDate = () => {

    const today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
}

export const getCountdownDistance = (birthday)=>{
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        
    const countDown = new Date(birthday).getTime();
    const now = new Date().getTime();
    const distance = countDown - now;

    const daysLeft =  distance / (day)
    const hoursLeft =  (distance % (day)) / (hour);
    const minutesLeft =  (distance % (hour)) / (minute);
    const secondsLeft =  (distance % (minute)) / second;

    return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
}
