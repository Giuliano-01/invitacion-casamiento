import styled from "styled-components";

export const TarjetaInvitacionPage1Container = styled.section`
    width: 100vw;
    height: 100vh;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
    export const HeaderContainer = styled.header`
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Parisienne", cursive;
        font-weight: 400;
        font-size: 25px;
        font-style: normal;
        color: #ddc190;
        br{
            display: none;
        }
        @media screen and (max-width: 400px){
            font-size: 20px;
        }
        @media screen and (max-width: 260px){
            max-width: 50%;
            height: 20%;
            line-height: 25px;
            br{
                display: flex;
            }
        }
    `
    export const SliderContainer = styled.section`
        width: 90%;
        height: 80%;
        position: relative;
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
            @media screen and (min-width: 700px){
                top: 70%;
                left: 70%;
                height: 150%;
            }
            @media screen and (max-height: 500px){
                top: 70%;
                left: 70%;
                height: 150%;
            }
        `
        export const ImageContainerBg = styled.div`
            position: absolute;
            overflow: hidden;
            display: flex;
            max-height: 100vh;
            justify-content: center;
            top: 0%;
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
            font-family: "Old Standard TT", serif;
            font-weight: 400;
            font-size: 35px;
            color: white;
            text-shadow: 1px 1px 5px rgba(0,0,0,0.6);
            @media screen and (max-width: 400px){
                font-size: 25px;
            }
            @media screen and (max-width: 260px){
                line-height: 30px;
                br{
                    display: flex;
                }
            }
            @media screen and (min-width: 700px){
                width: fit-content;
                font-size: 25px;
                top: 20%;
                left: 0%;
                height: 150%;
                color: black;
                text-shadow: 1px 1px 5px rgb(255 255 255);
            }
            @media screen and (max-height: 500px){
                width: fit-content;
                font-size: 23px;
                top: 0%;
                left: 0%;
                height: 150%;
                color: black;
                text-shadow: 1px 1px 5px rgb(255 255 255);
                max-width: 40%;
            }
        `
    export const ChevronContainer = styled.div`
        height: 10%;
    `
