import styled from "styled-components";

export const TarjetaInvitacionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`
    export const HeaderContainer = styled.header`
        width: 100%;
        height: 75px;
        font-family: "Parisienne", cursive;
        font-weight: 400;
        font-style: normal;
        color: #ddc190;
    `
    export const SliderContainer = styled.section`
        position: relative;
        width: 90%;
        height: calc(90% - 75px);
        overflow: hidden;
        border-radius: 15px;
    `
        export const ImageContainer = styled.div`
            position: absolute;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 1s ease;
            ${({active})=> active && "opacity: 1;"}
        `
        export const TextContainer = styled.div`
            position: absolute;
            bottom: 30px;
            width: 100%;
        `
