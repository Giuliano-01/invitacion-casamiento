import React, { useEffect, useMemo, useState } from 'react'
import { Anchor1Container, AnchorContainer, DateCounterContainer, DateItem, DateSeparator, DateSpan, DateUl, Paragraph, SvgContainer, TarjetaInvitacionPage2Container, TextContainer, TitleH2, TitleH2Items, Titles2Container, TitlesContainer } from './styles'
import { generateGoogleCalendarLink, getCountdownDistance } from './utils'
import AnchorBtn from '../components/Buttons/AnchorBtn'
import Section from '../components/Layouts/Section'
import PageSection from '../components/Layouts/PageSection'
import SeparatorImg from './separatos.png'

const TarjetaInvitacionPage2 = () => {

  const [dateLeft, setDateLeft] = useState({ daysLeft: null, hoursLeft: null, minutesLeft: null, secondsLeft: null })
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
    <PageSection fitContent={true}>
      <Section>
        <TitlesContainer>
          <Paragraph>Agenda la fecha</Paragraph>
          <TitleH2>11 de Enero</TitleH2>
        </TitlesContainer>
        <DateCounterContainer>
          <DateUl style={{ padding: "0" }}>
            <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.daysLeft).toString()}</DateSpan><span style={{fontSize: ".9rem"}}>Dias</span></DateItem>
            <DateSeparator>:</DateSeparator>
            <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.hoursLeft).toString()}</DateSpan><span style={{fontSize: ".9rem"}}>Hs</span></DateItem>
            <DateSeparator>:</DateSeparator>
            <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.minutesLeft).toString()}</DateSpan><span style={{fontSize: ".9rem"}}>Min</span></DateItem>
            <DateSeparator>:</DateSeparator>
            <DateItem><DateSpan>{dateLeft && Math.trunc(dateLeft.secondsLeft).toString()}</DateSpan><span style={{fontSize: ".9rem"}}>Seg</span></DateItem>
          </DateUl>
        </DateCounterContainer>
        <Anchor1Container>
          <AnchorBtn href={calendarApiDate}>
            <svg fill='#ddc190' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
            </svg>
            Agendar fecha
          </AnchorBtn>
        </Anchor1Container>
      <img style={{marginTop: "20px", width: "100%", maxWidth: "max-width: 300px"}} src={SeparatorImg}/>
      </Section>
    </PageSection>
  )
}

export default TarjetaInvitacionPage2