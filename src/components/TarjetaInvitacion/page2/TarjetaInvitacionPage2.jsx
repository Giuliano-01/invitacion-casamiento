import React, { useEffect, useMemo, useState } from 'react'
import { AnchorCalendar, AnchorMaps, CalendarIconContainer, ChuchDateContainer, CountDownContainer, DateItem, DateSeparator, DateSpan, DateUl, Paragraph, TarjetaInvitacionPage2Container, TitleH2, TitleH2Items } from './styles'
import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import {generateGoogleCalendarLink, getCountdownDistance, getTodayDate } from './utils'

const TarjetaInvitacionPage2 = () => {

  const { isLetterOpen } = useToggleLetter()
  const [dateLeft, setDateLeft] = useState({daysLeft:null, hoursLeft:null, minutesLeft:null, secondsLeft: null})
  const birthday = "01/27/2025";
  const calendarApiDate = useMemo(() => {
    return generateGoogleCalendarLink(
      "2025-01-11",    // startDate
      "23:00:00",      // startTime
      "2025-01-12",    // endDate
      "04:00:00",      // endTime
      "Carolina y Marcelo", // Título
      "America/Argentina/Buenos_Aires" // Zona horaria
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateLeft(getCountdownDistance(birthday));
    }, 1000);

    return () => clearInterval(interval);
  }, [])
  
  return (
    <TarjetaInvitacionPage2Container isLetterOpen={isLetterOpen}>
        <CountDownContainer>
            <Paragraph>Agenda la fecha</Paragraph>
            <TitleH2>11 de Enero</TitleH2>
            <DateUl style={{padding: "0"}}>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.daysLeft).toString()}</DateSpan>Dias</DateItem>
              <DateSeparator>:</DateSeparator>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.hoursLeft).toString()}</DateSpan>Hs</DateItem>
              <DateSeparator>:</DateSeparator>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.minutesLeft).toString()}</DateSpan>Min</DateItem>
              <DateSeparator>:</DateSeparator>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.secondsLeft).toString()}</DateSpan>Seg</DateItem>
            </DateUl>
            <AnchorCalendar href={calendarApiDate} target="_blank">
              <svg width={20} fill='#ddc190' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
              </svg>
              <p style={{color: "#ddc190"}}>Agendar fecha</p>
            </AnchorCalendar>        
        </CountDownContainer>

        <ChuchDateContainer>
          <article class="item">
            <svg width={150} fill='#ddc190c5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"/>
            </svg>
            <TitleH2Items>Ceremonia</TitleH2Items>
            <div>
              <p style={{fontSize: "18px"}}><b>Parroquia Nuestra Señora del Rosario</b></p>
              <p style={{fontSize: "18px"}}>Bonpland 1987, Buenos Aires</p>
              <p style={{fontSize: "18px"}}>29 de Diciembre, 19:30 hs.</p>
            </div>
            <AnchorMaps href="https://www.google.com.ar/maps/place/Bassi+12,+B1864IEB+Alejandro+Korn,+Provincia+de+Buenos+Aires/@-34.9849401,-58.3936269,15z/data=!3m1!4b1!4m6!3m5!1s0x95bd2cb25cbd2303:0x850e97844705e58e!8m2!3d-34.9849591!4d-58.3751728!16s%2Fg%2F11gmz79rvg?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
              <p style={{color: "#ddc190"}}>Cómo llegar</p>
            </AnchorMaps>            
          </article>
        </ChuchDateContainer>
    </TarjetaInvitacionPage2Container>
  )
}

export default TarjetaInvitacionPage2