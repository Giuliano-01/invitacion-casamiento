import styled from "styled-components";

export const SectionStyled = styled.section`
    width: 100%;
    height: 50%;
    padding: 20px 20px;
    font-family: "Old Standard TT", serif;
    color: #6c757d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3%;
    @media screen and (max-height: 500px){
        height: 100%;
    }
    @media screen and (min-width: 700px){
        height: 100%;
    }
`

export const PageSectionStyled = styled.section`
    width: 100vw;
    height: ${({fitContent})=>fitContent ? 'fit-content' : '100vh'};
    padding-bottom: 50px;
    background-color: white;
    display: none;
    align-items: center;
    flex-direction: column;
    ${({isLetterOpen})=>isLetterOpen && "display: flex;"}
    @media screen and (min-width: 700px){
        flex-direction: row;
    }
    @media screen and (max-height: 500px) and (max-width: 700px){
        height: ${({fitContent})=>fitContent ? '100vh' : '200vh'};
    }
`