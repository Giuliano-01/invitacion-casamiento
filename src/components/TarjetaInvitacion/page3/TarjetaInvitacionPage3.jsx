import { useToggleLetter } from '../../../hooks/useIsLetterOpen'
import { AnchorMaps, ChuchDateContainer, TarjetaInvitacionPage2Container, TitleH2Items } from './styles'

const TarjetaInvitacionPage3 = () => {

  const { isLetterOpen } = useToggleLetter()

  return (
    <TarjetaInvitacionPage2Container isLetterOpen={isLetterOpen}>
      <ChuchDateContainer>
        <article class="item">
        <svg width={100} fill='#ddc190c5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/>
        </svg>
          <TitleH2Items>Festejo</TitleH2Items>
          <div>
            <p style={{fontSize: "18px"}}><b>Parroquia Nuestra Señora del Rosario</b></p>
            <p style={{fontSize: "18px"}}>Bonpland 1987, Buenos Aires</p>
            <p style={{fontSize: "18px"}}>29 de Diciembre, 19:30 hs.</p>
          </div>
          <AnchorMaps href="https://www.google.com.ar/maps/place/Bassi+12,+B1864IEB+Alejandro+Korn,+Provincia+de+Buenos+Aires/@-34.9849401,-58.3936269,15z/data=!3m1!4b1!4m6!3m5!1s0x95bd2cb25cbd2303:0x850e97844705e58e!8m2!3d-34.9849591!4d-58.3751728!16s%2Fg%2F11gmz79rvg?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
            <p style={{color: "#ddc190"}}>Cómo llegar</p>
          </AnchorMaps>            
        </article>
      </ChuchDateContainer>
      <ChuchDateContainer>
        <article class="item">
          <svg width={100} fill='#ddc190c5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
          </svg>
          <TitleH2Items>Dress Code</TitleH2Items>
          <div>
            <p style={{fontSize: "18px"}}><b>Formal - Elegante</b></p>
            <p style={{fontSize: "18px"}}>El blanco queda reservado para la Novia</p>
          </div>
          <AnchorMaps href="" target="_blank">
            <p style={{color: "#ddc190"}}>Inspirate</p>
          </AnchorMaps>            
        </article>
      </ChuchDateContainer>
    </TarjetaInvitacionPage2Container>
  )
}

export default TarjetaInvitacionPage3