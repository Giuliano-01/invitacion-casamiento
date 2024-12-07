import { useEffect, useState } from 'react'
import { ChevronContainer, HeaderContainer, ImageContainer, ImageContainerBg, SliderContainer, TarjetaInvitacionPage1Container, TextContainer } from './styles'
import Img1 from './fotos/20.jpg'
import Img2 from './fotos/21.jpg'
import Img3 from './fotos/27.jpg'
import ChevronDown from '../components/ChevronDown'

const TarjetaInvitacionPage1 = () => {

  const [activeImage, setActiveImage] = useState(Number(0))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevCount) => (prevCount + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [])

  return (
    <TarjetaInvitacionPage1Container>

      <HeaderContainer>
        <h1><>Carolina <br/> & <br/> Marcelo</></h1>
      </HeaderContainer>

      <SliderContainer>
        <ImageContainer active={Boolean(activeImage === 0)}><img style={{ height: "100%" }} src={Img1} /></ImageContainer>
        <ImageContainer active={Boolean(activeImage === 1)}><img style={{ height: "100%" }} src={Img2} /></ImageContainer>
        <ImageContainer active={Boolean(activeImage === 2)}><img style={{ height: "100%" }} src={Img3} /></ImageContainer>

        <TextContainer>
          <h2>¡Nos Casamos!</h2>
          <p>y queremos compartirlo contigo.</p>
        </TextContainer>
      </SliderContainer>

      <ChevronContainer>
        <ChevronDown />
      </ChevronContainer>

    </TarjetaInvitacionPage1Container>
  )
}

export default TarjetaInvitacionPage1