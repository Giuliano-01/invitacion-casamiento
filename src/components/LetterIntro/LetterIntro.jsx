import  { useEffect, useState } from 'react'
import letterTop from './../lettertop.png'
import { HeartAbsoluteContainer, HeartCircle1, HeartCircle2, HeartContainer, HeartSquare, LetterBottomContainer, LetterContainer, LetterTopContainer } from './styles'
import { useToggleLetter } from '../../hooks/useIsLetterOpen'

const LetterIntro = () => {

  const { isLetterOpen, toggleLetterOpen} = useToggleLetter()
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  const handleClick = ()=>{
    const app = document.getElementById('App')
    toggleLetterOpen(true);
    app.addEventListener('webkitAnimationEnd', ()=>setIsAnimationEnd(true), false);
    app.addEventListener('animationend', ()=>setIsAnimationEnd(true), false);
    app.classList.add('love');
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }

  useEffect(() => {
    const app = document.getElementById('App')
    app.classList.remove('love');
  }, [isAnimationEnd])
  
  if(isAnimationEnd){
    return (<></>)
  }
  
  return (
    <LetterContainer isLetterOpen={isLetterOpen}>

      <LetterTopContainer isLetterOpen={isLetterOpen}>
        <img style={{height: "30vh", width: "200vw"}} src={letterTop}></img>
      </LetterTopContainer>
        
      <LetterBottomContainer>
      </LetterBottomContainer>
        
      <HeartAbsoluteContainer>
        <HeartContainer onClick={()=>handleClick()}>
          <HeartSquare></HeartSquare>
          <HeartCircle1></HeartCircle1>
          <HeartCircle2></HeartCircle2>
        </HeartContainer>
      </HeartAbsoluteContainer>

    </LetterContainer>
  )
}

export default LetterIntro