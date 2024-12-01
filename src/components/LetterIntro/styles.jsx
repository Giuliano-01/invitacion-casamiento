import styled from "styled-components";

export const LetterContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    padding-bottom: 50px;
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
        height: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 1s ease;
        z-index: 300;
        ${({isLetterOpen})=>isLetterOpen && "transform: translate(0px, -30vh) scale(1, -1.0);"}
        img{
            filter: drop-shadow(0 25px 1rem #ad101029);
        }
    `
    
    export const LetterBottomContainer = styled.div`
        position: relative;
        width: 100vw;
        height: 50%;
        background-color: white;
        top: 0vh;
        z-index: 250;
        background-size: clamp(100px, 90vw, 400px);
        background-repeat: no-repeat;
        background-position: 80% 100%;
    `

    export const HeartAbsoluteContainer = styled.div`
        position: absolute;
        z-index: 900;
        width: fit-content;
        height: fit-content;
        transform: rotate(-135deg);
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
        export const TextHear = styled.div`
            position: absolute;
            color: white;
            transform: rotate(135deg) translate(25%, -80%);
            font-size: 24px;
            font-family: "Old Standard TT", serif;
        `
        export const TextTop = styled.div`
            position: absolute;
            font-family: "Parisienne", cursive;
            font-weight: bold;
            font-style: normal;
            color: #ddc190;
            font-size: 45px;
            z-index: 999;
            top: -10%;    
            transition: transform 1s ease;
            br{
                display: none;
            }
            width: 100%;
            height: 100%;
            display: flex;   
            justify-content: center;
            align-items: center;
            ${({isLetterOpen})=>isLetterOpen && "transform: translate(0px, -30vh) scale(1, -1.0);"}
            @media screen and (max-width: 400px){
                font-size: 35px;
            }
            @media screen and (max-width: 300px){
                br{
                    display: flex;
                }
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