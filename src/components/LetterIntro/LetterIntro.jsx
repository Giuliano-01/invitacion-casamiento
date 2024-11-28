import  { useState } from 'react'
import './../style.css'
import letterTop from './../lettertop.png'
import { LetterBottomContainer, LetterContainer, LetterTopContainer } from './styles'

const LetterIntro = () => {

    const [isLetterOpen, setIsLetterOpen] = useState(false)
    
    return (
      <LetterContainer isLetterOpen={isLetterOpen}>

        <LetterTopContainer isLetterOpen={isLetterOpen}>
            <img style={{height: "30vh", width: "200vw"}} src={letterTop}></img>
        </LetterTopContainer>
        
        <LetterBottomContainer>
        </LetterBottomContainer>
        

        <button className='buttonCenter' onClick={()=>setIsLetterOpen(true)}>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
    </LetterContainer>
  )
}

export default LetterIntro