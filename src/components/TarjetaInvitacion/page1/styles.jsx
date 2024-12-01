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
        `
        export const TextContainer = styled.div`
            position: absolute;
            bottom: 30px;
            width: 100%;
            font-family: "Old Standard TT", serif;
            font-weight: 400;
            font-size: 30px;
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
        `
    export const ChevronContainer = styled.div`
        height: 10%;
    `