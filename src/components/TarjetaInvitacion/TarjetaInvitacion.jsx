import { TarjetaInvitacionContainer } from './styles'

import TarjetaInvitacionPage1 from './page1/TarjetaInvitacionPage1'
import TarjetaInvitacionPage2 from './components/TarjetaInvitacionPage2'

const TarjetaInvitacion = () => {
  
  return (
    <TarjetaInvitacionContainer>
      
      <TarjetaInvitacionPage1/>

      <TarjetaInvitacionPage2/>

    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion