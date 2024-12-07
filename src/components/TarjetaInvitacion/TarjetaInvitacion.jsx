import { TarjetaInvitacionContainer } from './styles'

import TarjetaInvitacionPage1 from './page1/TarjetaInvitacionPage1'
import TarjetaInvitacionPage2 from './page2/TarjetaInvitacionPage2'
import TarjetaInvitacionPage3 from './page3/TarjetaInvitacionPage3'
import TarjetaInvitacionPage4 from './page4/TarjetaInvitacionPage4'
import backgroundImg from '../background.jpg'
import TarjetaInvitacionPage5 from './page5/TarjetaInvitacionPage5'
import { useImageOpen } from '../../hooks/useImageOpen'
import { Backdrop, CloseBtn, ModalImg } from './page5/styles'
import { useEffect, useRef } from 'react'
const TarjetaInvitacion = () => {
  
  const { isImageOpen, imageOpenOpen} = useImageOpen()
  const modalRef = useRef(null)

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
    if (modalRef.current && !modalRef.current.contains(event.target)) {
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
      
      <TarjetaInvitacionPage1/>
      <TarjetaInvitacionPage2/>
      <TarjetaInvitacionPage3/>
      {/* <TarjetaInvitacionPage4/> */}
      <TarjetaInvitacionPage5/>

      { isImageOpen && <Backdrop />}
      { isImageOpen &&
        (<ModalImg ref={modalRef}>
          <CloseBtn onClick={()=>handleCloseImg()}>
            X
          </CloseBtn>
          <img src={isImageOpen}/>
        </ModalImg>)
      }
    </TarjetaInvitacionContainer>
  )
}

export default TarjetaInvitacion