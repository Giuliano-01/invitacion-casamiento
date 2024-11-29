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
    transition: opacity 3s ease;
    ${({isLetterOpen})=>isLetterOpen && "opacity: 0;"}
    z-index: 800;
    top: 0;
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

    export const HeartAbsoluteContainer = styled.div`
        position: absolute;
        z-index: 900;
        width: fit-content;
        height: fit-content;
        top:52%;
    `
        export const HeartContainer = styled.div`
            cursor: pointer;
            position: relative;
            margin: 0 20px ;
            animation: pulse 1s infinite alternate ease-in-out;
            margin: 0 auto;
            @keyframes pulse {
                0%   {transform: scale(.9) rotate(-135deg);}
                100% {transform: scale(1.1) rotate(-135deg);}
            }
        `
        export const HeartSquare = styled.div`
            width: 70px;
            height: 70px;
            background: #c70000;
            position: absolute;
        `
        export const HeartCircle1 = styled.div`
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #c70000;
            position: absolute;
            top: 30px;
        `
        export const HeartCircle2 = styled.div`
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #c70000;
            position: absolute;
            left: 30px;
        `