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
        width: 50px;
        height: 50px;
        top: 30px;
        border-radius: 30px;
        font-size: 30px;
        font-weight: bold;
    `