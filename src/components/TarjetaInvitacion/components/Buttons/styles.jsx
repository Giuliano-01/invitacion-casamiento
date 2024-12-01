import styled from "styled-components";

export const AnchorBtnStyled = styled.a`
    width: 100%;
    max-width: 200px;
    height: fit-content;
    padding: 10px 10px;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #ddc190;
    border: 1px outset #ddc190;
    border-radius: 40px;
    font-family: "Old Standard TT", serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    white-space: wrap;
    animation: pulse 1s infinite alternate ease-in-out;
    @keyframes pulse {
        0%   {transform: scale(.9);}
        100% {transform: scale(1);}
    }
    svg{
        width: 15px;
    }
`