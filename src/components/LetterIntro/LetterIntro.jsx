import  { useEffect, useState } from 'react'
import letterTop from './../lettertop.png'
import { HeartAbsoluteContainer, HeartCircle1, HeartCircle2, HeartContainer, HeartSquare, LetterBottomContainer, LetterContainer, LetterTopContainer, TextHear, TextTop } from './styles'
import { useToggleLetter } from '../../hooks/useIsLetterOpen'
import imageFlor from './pngegg.png'

const LetterIntro = () => {

  const { isLetterOpen, toggleLetterOpen} = useToggleLetter()
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  const handleClick = ()=>{
    const app = document.getElementById('App')
    toggleLetterOpen(true);
    app.addEventListener('webkitAnimationEnd', ()=>setIsAnimationEnd(true), false);
    app.addEventListener('animationend', ()=>setIsAnimationEnd(true), false);
    app.classList.add('love');
    // if (document.documentElement.requestFullscreen) {
    //   document.documentElement.requestFullscreen();
    // }
  }

  useEffect(() => {
    const app = document.getElementById('App')
    app.classList.remove('love');
    app.classList.add('remove');
  }, [isAnimationEnd])
  
  if(isAnimationEnd){
    return (<></>)
  }
  
  return (
    <LetterContainer isLetterOpen={isLetterOpen}>
      <LetterTopContainer isLetterOpen={isLetterOpen}>
        <TextTop>{!isLetterOpen && <>Carolina <br/> & <br/> Marcelo</>}</TextTop>
        <img style={{height: "100%", width: "200vw"}} src={letterTop}></img>
      </LetterTopContainer>
        
      <LetterBottomContainer style={{backgroundImage: `url(${imageFlor})`}}>
      </LetterBottomContainer>
      {!isLetterOpen && 
        <HeartAbsoluteContainer>
          <HeartContainer onClick={()=>handleClick()}>
            <HeartSquare></HeartSquare>
            <HeartCircle1></HeartCircle1>
            <HeartCircle2></HeartCircle2>
            <TextHear>Ingresar</TextHear>
          </HeartContainer>
        </HeartAbsoluteContainer>
      }
    </LetterContainer>
  )
}

export default LetterIntro