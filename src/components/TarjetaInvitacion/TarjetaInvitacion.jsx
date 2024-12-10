import { MusicContainer, MuteContainer, TarjetaInvitacionContainer } from './styles'

import TarjetaInvitacionPage1 from './page1/TarjetaInvitacionPage1'
import TarjetaInvitacionPage2 from './page2/TarjetaInvitacionPage2'
import TarjetaInvitacionPage3 from './page3/TarjetaInvitacionPage3'
import TarjetaInvitacionPage4 from './page4/TarjetaInvitacionPage4'
import backgroundImg from '../background.jpg'
import TarjetaInvitacionPage5 from './page5/TarjetaInvitacionPage5'
import { useImageOpen } from '../../hooks/useImageOpen'
import { Backdrop, CloseBtn, ModalImg } from './page5/styles'
import { useEffect, useRef, useState } from 'react'
import musicBg from './belconteUndiaperfecto.mp3'
import { useToggleLetter } from '../../hooks/useIsLetterOpen'
import TarjetaInvitacionPage32 from './page32/TarjetaInvitacionPage3'

const TarjetaInvitacion = () => {
  
  const { isImageOpen, imageOpenOpen} = useImageOpen()
  const { isLetterOpen, toggleLetterOpen} = useToggleLetter()
  
  const modalRef = useRef(null)
  const imageRef = useRef(null)
  const musicRef = useRef(null)
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if(isLetterOpen && musicRef.current){
      musicRef.current.play()
      musicRef.current.volume = 1
    }
  }, [isLetterOpen])
  
  useEffect(() => {
    if(playing && isLetterOpen && musicRef.current){
      musicRef.current.play()
    }
    if(!playing && isLetterOpen && musicRef.current){
      musicRef.current.pause()
    }
  }, [playing])
  
  useEffect(() => {
    
    if(isImageOpen && modalRef.current){
      document.body.style.overflow = "hidden";
      modalRef.current.style.top = `${window.scrollY}px`;
    }

  }, [isImageOpen])
  
  const handleCloseImg = ()=>{
    imageOpenOpen(null)
    document.body.style.overflow = "scroll";
  }
  const handleClickOutside = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      handleCloseImg()
    }
  };

  useEffect(() => {

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TarjetaInvitacionContainer isImageOpen={isImageOpen} style={{backgroundImage: `url(${backgroundImg})`}}>

      <audio ref={musicRef} loop>
        <source src={musicBg} type="audio/mp3"/>
      </audio>

      <TarjetaInvitacionPage1/>
      <TarjetaInvitacionPage2/>
      <TarjetaInvitacionPage3/>
      <TarjetaInvitacionPage32/>
      <TarjetaInvitacionPage4/>
      <TarjetaInvitacionPage5/>

      { isImageOpen && <Backdrop />}
      { isImageOpen &&
        (<ModalImg ref={modalRef}>
          <CloseBtn onClick={()=>handleCloseImg()}>
            <svg style={{width: "100%", height: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
          </CloseBtn>
          <img ref={imageRef} src={isImageOpen}/>
        </ModalImg>)
      }
      <MusicContainer>
        <MuteContainer onClick={()=>setPlaying(prevState=>!prevState)}>
          {playing && <svg style={{width: "60%", fill: 'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>}
          {!playing && <svg style={{width: "60%", fill: 'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>}
        </MuteContainer>
      </MusicContainer>
    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion