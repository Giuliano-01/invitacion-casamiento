import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import ChevronDown from '../components/ChevronDown'
import { AnchorMaps, ChuchDateContainer, RegalosContainer, TarjetaInvitacionPage2Container, TitleH2Asistencia } from './styles'
import plantasImg from './plantas.jpg'
import Section from '../components/Layouts/Section'
import PageSection from '../components/Layouts/PageSection'
import backgroundImg from '../../background.jpg'

const TarjetaInvitacionPage4 = () => {

  return (
    <PageSection fitContent style={{backgroundImage: `url(${backgroundImg})`}}>
      <Section>
        <TitleH2Asistencia>Confirmación de Asistencia</TitleH2Asistencia>
        <p>Esperamos contar con tu presencia, no olvides confirmar</p>
        <AnchorMaps href="https://api.whatsapp.com/send/?phone=2224533356&text=Hola,%20confirmo%20mi%20asistencia.">
          <p style={{color: "#ddc190"}}>Confirmar Asistencia</p>
        </AnchorMaps>            
      </Section>
      <Section bgimg={plantasImg}>
          <RegalosContainer>
            <TitleH2Asistencia>Regalos</TitleH2Asistencia>                
            <p>
              Tu presencia es lo más importante para nosotros.
              <br/>
              Si además deseas hacernos un regalo, te dejamos nuestro alias:
            </p>
            <h3>cheloneri</h3>                            
          </RegalosContainer>
      </Section>
    </PageSection>
  )
}

export default TarjetaInvitacionPage4