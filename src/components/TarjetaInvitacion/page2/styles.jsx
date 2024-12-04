import styled from "styled-components";

export const TitlesContainer = styled.div`
    width: 100%; 
    height: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 240px){
        height: fit-content;
    }
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
        export const Paragraph = styled.p`
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin: 0 0!important;
            color: #ddc190;
            @media screen and (min-width: 400px){
                font-size: 20px;
                line-height: 20px;
            }
        `
        export const TitleH2 = styled.h2`
            font-family: "Parisienne", cursive;
            font-size: 35px;
            font-weight: 200;
            letter-spacing: 3px;
            line-height: 30px;
            margin: 20px 0!important;
            color: #6c757d;
            @media screen and (min-width: 400px){
                font-size: 40px;
                line-height: 20px;
            }
        `
export const DateCounterContainer = styled.div`
    width: 100%; 
    height: fit-content; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 240px){
        height: 0%;
    }
`
        export const DateUl = styled.ul`
            max-height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            @media screen and (max-width: 240px){
                display: none;
            }
        `
            export const DateItem = styled.li`
                display: inline-block;
                font-size: 1em;
                list-style-type: none;
                padding: 1em;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #ddc190;
                @media screen and (max-width: 400px){
                    font-size: .05em;
                }
            `
            export const DateSpan = styled.span`
                display: block;
                font-size: 2.5rem;
            `
            export const DateSeparator = styled.span`
                font-size: 2em;
                margin-bottom: 5%;
                color: #ddc190;
            `
export const Anchor1Container = styled.div`
    width: 100%; 
    height: fit-content; 
    margin: 5px 0!important;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 240px){
        height: 50%;
    }
`


export const SvgContainer = styled.svg`
    width: 100%;
    height: 30%;
`
export const Titles2Container = styled.div`
    font-family: "Old Standard TT", serif;
    color: #6c757d;
    width: 100%;
    max-height: 60%;
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: column;
        gap: 20%;
    }
`
        export const TitleH2Items = styled.h2`
            font-size: 30px;
            font-weight: 200;
            line-height: 30px;
            margin: 0!important;
            @media screen and (min-width: 400px){
                font-size: 35px;
                line-height: 35px;
            }
        `
        export const TextContainer = styled.p`
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