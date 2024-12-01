import React from 'react'
import { PageSectionStyled } from './styles'
import { useToggleLetter } from '../../../../hooks/useIsLetterOpen'

const PageSection = ({children}) => {
    const { isLetterOpen } = useToggleLetter()

    return (
        <PageSectionStyled isLetterOpen={isLetterOpen}>
            {children}
        </PageSectionStyled>
    )
}

export default PageSection