import { AnchorBtnStyled } from "./styles"

const AnchorBtn = ({children, href, icon}) => {
  return (
    <AnchorBtnStyled href={href} target="_blank">
      {icon}
      {children}
    </AnchorBtnStyled>
  )
}

export default AnchorBtn