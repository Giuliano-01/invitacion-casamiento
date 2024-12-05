import styled from "styled-components";

export const SvgContainer = styled.svg`
    width: 40%;
    max-width: 150px;
    height: 30%;
    margin: 20px 20px;
`

export const CardTextContainer = styled.div`
    font-family: "Old Standard TT", serif;
    color: #6c757d;
    width: 100%;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 20px 20px;
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: column;
        gap: 20%;
    }
`

    export const CardTitleH2 = styled.h2`
        font-size: 30px;
        font-weight: 200;
        line-height: 30px;
        margin: 0!important;
        @media screen and (min-width: 400px){
            font-size: 35px;
            line-height: 35px;
        }
    `
    export const CardParagraph = styled.p`
        font-size: 13px;
        font-weight: 200;
        line-height: 15px;
        margin: 0!important;
        @media screen and (min-width: 330px){
            font-size: 18px;
            line-height: 20px;
        }
        @media screen and (min-width: 408px){
            font-size: 22px;
            line-height: 25px;
        }
    `
export const CardAnchorContainer = styled.div`
    width: 100%; 
    height: fit-content; 
    margin: 5px 0!important;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 240px){
        height: 50%;
    }
`
