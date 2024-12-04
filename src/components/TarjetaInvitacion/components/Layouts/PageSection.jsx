import React from 'react'
import { PageSectionStyled } from './styles'
import { useToggleLetter } from '../../../../hooks/useIsLetterOpen'

const PageSection = ({children, fitContent}) => {
    const { isLetterOpen } = useToggleLetter()

    return (
        <PageSectionStyled isLetterOpen={isLetterOpen} fitContent={fitContent}>
            {children}
        </PageSectionStyled>
    )
}

export default PageSection