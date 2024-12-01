import { TarjetaInvitacionContainer } from './styles'

import TarjetaInvitacionPage1 from './page1/TarjetaInvitacionPage1'
import TarjetaInvitacionPage2 from './page2/TarjetaInvitacionPage2'
import TarjetaInvitacionPage3 from './page3/TarjetaInvitacionPage3'
import TarjetaInvitacionPage4 from './page4/TarjetaInvitacionPage4'
import backgroundImg from '../background.jpg'
const TarjetaInvitacion = () => {
  
  return (
    <TarjetaInvitacionContainer style={{backgroundImage: `url(${backgroundImg})`}}>
      
      <TarjetaInvitacionPage1/>
      <TarjetaInvitacionPage2/>
      {/* <TarjetaInvitacionPage3/>
      <TarjetaInvitacionPage4/> */}

    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion