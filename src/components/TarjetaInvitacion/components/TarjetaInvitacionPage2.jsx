import React, { useEffect, useState } from 'react'
import { CountDownContainer, DateItem, DateSpan, Paragraph, TarjetaInvitacionPage2Container, TitleH2 } from './styles'
import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import { getCountdownDistance, getTodayDate } from './utils'

const TarjetaInvitacionPage2 = () => {

  const { isLetterOpen } = useToggleLetter()
  const [dateLeft, setDateLeft] = useState({daysLeft:null, hoursLeft:null, minutesLeft:null, secondsLeft: null})
  console.log("🚀 ~ TarjetaInvitacionPage2 ~ dateLeft:", dateLeft)
  const birthday = "01/27/2025"

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
            <ul style={{padding: "0"}}>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.daysLeft).toString()}</DateSpan>Dias</DateItem>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.hoursLeft).toString()}</DateSpan>Horas</DateItem>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.minutesLeft).toString()}</DateSpan>Minutos</DateItem>
              <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.secondsLeft).toString()}</DateSpan>Segundos</DateItem>
            </ul>
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20241229T230000Z%2F20241230T040000Z&amp;details=%0A&amp;location=&amp;text=Florencia y Augusto" target="_blank"><i class="fa-regular fa-calendar-check"></i>Agendar fecha</a>        
        </CountDownContainer>
    </TarjetaInvitacionPage2Container>
  )
}

export default TarjetaInvitacionPage2