import { useEffect, useState } from 'react'
import { HeaderContainer, ImageContainer, SliderContainer, TarjetaInvitacionContainer, TextContainer } from './styles'
import Img1 from './Pm1.jpg'
import Img2 from './Pd2.jpg'
import Img3 from './Pd3.jpg'

const TarjetaInvitacion = () => {

  const [activeImage, setActiveImage] = useState(Number(0))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevCount) => (prevCount + 1)%3);
    }, 5000);

    return () => clearInterval(interval);
  }, [])
  
  return (
    <TarjetaInvitacionContainer>
      <HeaderContainer>
        <h1>Carolina & Marcelo</h1>
      </HeaderContainer>
      <SliderContainer>
        <ImageContainer active={Boolean(activeImage === 0)}><img style={{height: "100%"}} src={Img1}/></ImageContainer>
        <ImageContainer active={Boolean(activeImage === 1)}><img style={{height: "100%"}} src={Img2}/></ImageContainer>
        <ImageContainer active={Boolean(activeImage === 2)}><img style={{height: "100%"}} src={Img3}/></ImageContainer>
        <TextContainer>
          <h2>¡Nos Casamos!</h2>
          <p>y queremos compartirlo contigo.</p>
        </TextContainer>
      </SliderContainer>
    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion