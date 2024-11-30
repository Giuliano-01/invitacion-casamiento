import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import { AnchorMaps, ChuchDateContainer, TarjetaInvitacionPage2Container, TitleH2Asistencia } from './styles'

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
      <ChuchDateContainer>
        <section style={{backgroundImage: "url('images/gifts.jpg')"}}>
          <div>
            <h2>Regalos</h2>                
            <p>
              Tu presencia es lo más importante para nosotros.
              <br/>
              Si además deseas hacernos un regalo, puedes ayudarnos con nuestra luna de miel
            </p>
            <button class="modal-button" href="#myModal1">Más información</button>                            
          </div>
        </section>
      </ChuchDateContainer>
    </TarjetaInvitacionPage2Container>
  )
}

export default TarjetaInvitacionPage4