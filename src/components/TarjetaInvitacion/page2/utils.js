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

export const generateGoogleCalendarLink = (startDate, startTime, endDate, endTime, title, timeZone) => {
    // Función para convertir fecha y hora local a UTC
    const convertToUTC = (date, time) => {
      const [year, month, day] = date.split("-");
      const [hours, minutes, seconds] = time.split(":");
      
      // Crear una fecha en la zona horaria local (sin zona horaria definida)
      const localDate = new Date(year, month - 1, day, hours, minutes, seconds);
      
      // Obtener el desfase de la zona horaria local con respecto a UTC
      const utcOffset = localDate.getTimezoneOffset(); // en minutos
      
      // Convertir la hora a UTC
      localDate.setMinutes(localDate.getMinutes() - utcOffset);
      
      return localDate;
    };
  
    // Convertir las fechas y horas locales a UTC
    const startDateTime = convertToUTC(startDate, startTime);
    const endDateTime = convertToUTC(endDate, endTime);
  
    // Función para convertir la fecha a formato ISO y remover los signos "-"
    const toUTCFormat = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };
  
    // Convertir las fechas a formato adecuado
    const startUTC = toUTCFormat(startDateTime);
    const endUTC = toUTCFormat(endDateTime);
  
    // Generar el enlace de Google Calendar con zona horaria
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startUTC}%2F${endUTC}&ctz=${timeZone}&text=${encodeURIComponent(title)}`;
  };