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

const TarjetaInvitacionPage3 = () => {

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
      <Section bgimg={Civico}>
        <CardContainer className='card-container'>
        <img style={{ maxWidth: "100px"}} src={Ring} fill='#ddc190c5'/>
        <CardTextContainer>
          <CardTitleH2>
            Civil
          </CardTitleH2>
          <CardParagraph>
          <b>Centro cívico</b> <br/>
            Av. Pres. Perón 4964, Alejandro Korn. <br/>
            10 de Enero, 11:30 hs.
          </CardParagraph>
        </CardTextContainer>
        <CardAnchorContainer>
          <AnchorBtn href="https://www.google.com.ar/maps/place/Centro+Comunal+Alejandro+Korn/@-34.9870446,-58.3843584,16z/data=!4m10!1m2!2m1!1scentro+c%C3%ADvico+alejandro+korn!3m6!1s0x95bd2d9d6d43d8b1:0x9e5d5a45f3059a29!8m2!3d-34.9844857!4d-58.3764072!15sCh1jZW50cm8gY8OtdmljbyBhbGVqYW5kcm8ga29yblofIh1jZW50cm8gY8OtdmljbyBhbGVqYW5kcm8ga29ybpIBEGNvbW11bml0eV9jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjFlVGhMWVdKbkVBReABAPoBBAgAEC0!16s%2Fg%2F11nnr8zd_p?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
            Cómo llegar
          </AnchorBtn>
        </CardAnchorContainer>
        </CardContainer>
      </Section>
      <Section bgimg={IglesiaBg}>
        <CardContainer className='card-container'>
        <img style={{ maxWidth: "100px"}} src={IglesiaIcon} fill='#ddc190c5'/>
        <CardTextContainer>
          <CardTitleH2>
            Ceremonia
          </CardTitleH2>
          <CardParagraph>
          <b>Iglesia Nueva Apostolica</b> <br/>
            Sarmiento 235, Alejandro Korn. <br/>
            11 de Enero, 20:00 hs.
          </CardParagraph>
        </CardTextContainer>
        <CardAnchorContainer>
          <AnchorBtn href="https://www.google.com.ar/maps/place/Iglesia+Nueva+Apostolica/@-34.9826334,-58.3769592,17z/data=!3m1!4b1!4m6!3m5!1s0x95bd2cad77ce897d:0x8c25bb9acceef886!8m2!3d-34.9826378!4d-58.3743843!16s%2Fg%2F11h40z11dw?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
            Cómo llegar
          </AnchorBtn>
        </CardAnchorContainer>
        </CardContainer>
      </Section>
    </PageSection>
  )
}

export default TarjetaInvitacionPage3