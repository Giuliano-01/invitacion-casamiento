import styled from "styled-components";

export const LetterContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: opacity 1.5s ease;
    ${({isLetterOpen})=>isLetterOpen && "opacity: 0;"}
`

    export const LetterTopContainer = styled.div`
        position: relative;
        top: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 1s ease;
        z-index: 300;
        ${({isLetterOpen})=>isLetterOpen && "transform: translate(0px, -30vh) scale(1, -1.0);"}
    `
    
    export const LetterBottomContainer = styled.div`
        position: relative;
        width: 100vw;
        height: 70vh;
        background-color: white;
        top: 0vh;
        z-index: 250;
    `
    