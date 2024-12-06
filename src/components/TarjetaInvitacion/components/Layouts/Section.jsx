import { SectionStyled } from './styles'

const Section = ({children, bgimg}) => {
  return (
    <SectionStyled style={{backgroundImage: `url(${bgimg})`}}>
        {children}
    </SectionStyled>
  )
}

export default Section