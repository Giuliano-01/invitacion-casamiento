import  { useState } from 'react'
import './../style.css'
import './styles.scss'
import letterTop from './../lettertop.png'
import { HeartAbsoluteContainer, HeartButton, HeartCircle1, HeartCircle2, HeartContainer, HeartSquare, LetterBottomContainer, LetterContainer, LetterTopContainer } from './styles'

const LetterIntro = () => {

  const [isLetterOpen, setIsLetterOpen] = useState(false)
    
  return (
    <LetterContainer isLetterOpen={isLetterOpen}>

      <LetterTopContainer isLetterOpen={isLetterOpen}>
        <img style={{height: "30vh", width: "200vw"}} src={letterTop}></img>
      </LetterTopContainer>
        
      <LetterBottomContainer>
      </LetterBottomContainer>
        

      <HeartAbsoluteContainer>
        <HeartContainer onClick={()=>setIsLetterOpen(true)}>
          <HeartSquare></HeartSquare>
          <HeartCircle1></HeartCircle1>
          <HeartCircle2></HeartCircle2>
        </HeartContainer>
      </HeartAbsoluteContainer>

    </LetterContainer>
  )
}

export default LetterIntro