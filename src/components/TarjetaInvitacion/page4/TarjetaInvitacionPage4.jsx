import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import ChevronDown from '../components/ChevronDown'
import { AnchorMaps, ChuchDateContainer, RegalosContainer, TarjetaInvitacionPage2Container, TitleH2Asistencia } from './styles'
import plantasImg from './plantas.jpg'
const TarjetaInvitacionPage4 = () => {

  const { isLetterOpen } = useToggleLetter()

  return (
    <TarjetaInvitacionPage2Container isLetterOpen={isLetterOpen}>
      <ChuchDateContainer>
          <section style={{margin: "20px 40px"}}>
            <TitleH2Asistencia>Confirmación de Asistencia</TitleH2Asistencia>
            <p>Esperamos contar con tu presencia, no olvides confirmar</p>
            <AnchorMaps href="https://www.google.com.ar/maps/place/Bassi+12,+B1864IEB+Alejandro+Korn,+Provincia+de+Buenos+Aires/@-34.9849401,-58.3936269,15z/data=!3m1!4b1!4m6!3m5!1s0x95bd2cb25cbd2303:0x850e97844705e58e!8m2!3d-34.9849591!4d-58.3751728!16s%2Fg%2F11gmz79rvg?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
              <p style={{color: "#ddc190"}}>Confirmar Asistencia</p>
            </AnchorMaps>            
          </section>
      </ChuchDateContainer>
      <ChuchDateContainer style={{backgroundImage: `url(${plantasImg})`}}>
          <RegalosContainer>
            <TitleH2Asistencia>Regalos</TitleH2Asistencia>                
            <p>
              Tu presencia es lo más importante para nosotros.
              <br/>
              Si además deseas hacernos un regalo, puedes ayudarnos con nuestra luna de miel
            </p>
            <h3>ALIAS: caroarmel</h3>                            
          </RegalosContainer>
      </ChuchDateContainer>
    </TarjetaInvitacionPage2Container>
  )
}

export default TarjetaInvitacionPage4