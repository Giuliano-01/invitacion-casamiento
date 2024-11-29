import styled from "styled-components";

export const TarjetaInvitacionPage2Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: none;
    align-items: center;
    flex-direction: column;
    ${({isLetterOpen})=>isLetterOpen && "display: flex;"}
`
    export const CountDownContainer = styled.section`
        position: relative;
        width: 100%;
        padding: 15px 0px;
        text-align: center;
        border-bottom: 1px solid rgba(135, 135, 135, 0.2);
        .timer{
            height: 100px;
            padding: 0 34px;
            gap: 0px;
            justify-content: space-between;
        }
        a{
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            background-color: rgba(0, 0, 0, 0.06);
            text-decoration: none;
            color: #666;
            padding: 10px 32px;
            -webkit-border-top-left-radius: 40px;
            -moz-border-top-left-radius: 40px;
            border-top-left-radius: 40px;
            -webkit-border-top-right-radius: 40px;
            -moz-border-top-right-radius: 40px;
            border-top-right-radius: 40px;
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-bottom-right-radius: 40px;
            border-bottom-right-radius: 40px;
            -webkit-border-bottom-left-radius: 40px;
            -moz-border-bottom-left-radius: 40px;
            border-bottom-left-radius: 40px;
        }
    `
        export const Paragraph = styled.p`
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 5px;
        `
        export const TitleH2 = styled.h2`
            font-size: 32px;
            font-weight: 200;
            margin-bottom: 24px;
        `
        export const DateItem = styled.li`
            display: inline-block;
            font-size: 1em;
            list-style-type: none;
            padding: 1em;
            text-transform: uppercase;
        `
        export const DateSpan = styled.span`
            display: block;
            font-size: 3rem;
        `