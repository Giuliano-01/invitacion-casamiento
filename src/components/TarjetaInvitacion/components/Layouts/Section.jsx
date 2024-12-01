import { SectionStyled } from './styles'

const Section = ({children}) => {
  return (
    <SectionStyled>
        {children}
    </SectionStyled>
  )
}

export default Section