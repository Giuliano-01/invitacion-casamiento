import AnchorBtn from '../components/Buttons/AnchorBtn'
import PageSection from '../components/Layouts/PageSection'
import Section from '../components/Layouts/Section'
import { CardAnchorContainer, CardContainer, CardParagraph, CardTextContainer, CardTitleH2, SvgContainer } from './styles'
import IglesiaBg from './iglesiaBG.jpg'
import IglesiaIcon from './iglesiaicon.png'
import FiestaBg from './fiestaBg.jpg'
import DressCodeBg from './dresscodeBg.jpg'
import Ring from './rings.svg'
import Civico from './civico.jpg'
import { useEffect } from 'react'

const TarjetaInvitacionPage32 = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.item');
    let maxHeight = 0;

    // Encuentra el mayor alto
    items.forEach(item => {
      maxHeight = Math.max(maxHeight, item.clientHeight);
    });

    // Asigna el mayor alto a todos los elementos
    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }, [])
  

  return (
    <PageSection fitContent tripleContent>
      <Section bgimg={FiestaBg}>
        <CardContainer className='card-container'>
        <SvgContainer fill='#ddc190c5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/>
        </SvgContainer>
        <CardTextContainer>
          <CardTitleH2>
            Festejo
          </CardTitleH2>
          <CardParagraph>
            <b>Casa</b> <br/>
            Bassi 12, Alejandro Korn. <br/>
            11 de Enero, 21:00 hs.
          </CardParagraph>
        </CardTextContainer>
        <CardAnchorContainer>
          <AnchorBtn href="https://www.google.com.ar/maps/place/Bassi+12,+B1864IEB+Alejandro+Korn,+Provincia+de+Buenos+Aires/@-34.9849401,-58.3936269,15z/data=!3m1!4b1!4m6!3m5!1s0x95bd2cb25cbd2303:0x850e97844705e58e!8m2!3d-34.9849591!4d-58.3751728!16s%2Fg%2F11gmz79rvg?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
            Cómo llegar
          </AnchorBtn>            
        </CardAnchorContainer>
        </CardContainer>
      </Section>
      <Section bgimg={DressCodeBg}>
        <CardContainer className='card-container'>
          <SvgContainer fill='#ddc190c5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
          </SvgContainer>
          <CardTextContainer>
            <CardTitleH2>
              Código de vestimenta
            </CardTitleH2>
            <CardParagraph>
              <b>Formal - Elegante</b><br/>
            </CardParagraph>
          </CardTextContainer>
        </CardContainer>
      </Section>
    </PageSection>
  )
}

export default TarjetaInvitacionPage32