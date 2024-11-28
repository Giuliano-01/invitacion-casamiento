import { HeaderContainer, ImageContainer, SliderContainer, TarjetaInvitacionContainer, TextContainer } from './styles'
import Img1 from './Pm1.jpg'
import Img2 from './Pd2.jpg'
import Img3 from './Pd3.jpg'

const TarjetaInvitacion = () => {
  return (
    <TarjetaInvitacionContainer>
      <HeaderContainer>
        <h1>Carolina & Marcelo</h1>
      </HeaderContainer>
      <SliderContainer>
        <ImageContainer><img style={{height: "100%"}} src={Img1}/></ImageContainer>
        <TextContainer>
          <h2>¡Nos Casamos!</h2>
          <p>y queremos compartirlo contigo.</p>
        </TextContainer>
      </SliderContainer>
    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion