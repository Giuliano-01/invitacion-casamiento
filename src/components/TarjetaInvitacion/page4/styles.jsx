import styled from "styled-components";

export const TarjetaInvitacionPage2Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-bottom: 50px;
    background-color: white;
    display: none;
    align-items: center;
    flex-direction: column;
    ${({isLetterOpen})=>isLetterOpen && "display: flex;"}
    @media screen and (max-height: 500px) and (max-width: 700px){
        height: 200vh;
    }
`
        export const Paragraph = styled.p`
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 5px;
            color: #ddc190;
        `
        export const TitleH2 = styled.h2`
            font-size: 45px;
            font-weight: 200;
            font-family: "Parisienne", cursive;
            font-weight: 400;
            font-style: normal;
            margin-bottom: 0;
            color: #6c757d;
        `

        export const DateUl = styled.ul`
            display: flex;
            justify-content: center;
            align-items: center;
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
            export const AnchorCalendar = styled.a`
                display: flex!important;
                justify-content: center;
                align-items: center;
                gap:8%;
                max-width: 250px;
                margin: auto auto;
                animation: pulse 1s infinite alternate ease-in-out;
                border: 1px outset #ddc190;
                text-transform: uppercase;
                text-decoration: none;
                color: #666;
                padding: 10px 32px;
                border-radius: 40px;
                font-size: 14px;
                font-weight: 600;
                @keyframes pulse {
                    0%   {transform: scale(.9);}
                    100% {transform: scale(1);}
                }
            `


    export const ChuchDateContainer = styled.div`
        color: white;
        font-family: "Old Standard TT", serif;
        width: 100%;
        height: 50%;
        background-color: #ddc190;
        @media screen and (min-width: 700px){
            height: 100%;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-height: 650px) and (max-width: 700px){
            border-bottom: none;
            margin: auto auto;
            height: 50%;
        }
    ` 
        export const TitleH2Asistencia = styled.h2`
            font-size: 35px;
            font-weight: 200;
            font-family: "Old Standard TT", serif;
            font-style: normal;
            margin-bottom: 0;
            margin-top: 20px;
        `
        export const AnchorMaps = styled.a`
            display: flex!important;
            justify-content: center;
            align-items: center;
            max-width: 250px;
            max-height: 50px;
            margin: auto auto;
            border: 1px solid black;
            background-color: white;
            text-transform: uppercase;
            text-decoration: none;
            color: white;
            padding: 10px 32px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 600;
        `
        export const RegalosContainer = styled.div`
            background-color: white;
            width: 80%;
            margin: auto auto;
            max-width: 600px;
            color: #6c757d;
            border-radius: 30px;
        `