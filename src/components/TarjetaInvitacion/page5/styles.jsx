import styled from "styled-components";

export const GalleryContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
    @media screen and (min-width: 700px){
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 900px;
    }
`
    export const GalleryImg = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 20px;
    `

    export const ModalImg = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 90%;
            border-radius: 30px;
            @media screen and (max-height: 500px){
                position: relative;
                width: fit-content;
                height: 150%;
            }
        }
    `
    export const Backdrop = styled.div`
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #00000069;
        backdrop-filter: blur(5px);
        overflow: hidden;
    `
    export const CloseBtn = styled.button`
        position: absolute;
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 30px;
        border-radius: 1000px;
        border: none;
        background-color: transparent;
        height: 50px;
        z-index: 100;
        @media screen and (max-height: 500px){
            left: 20%;
        }
    `