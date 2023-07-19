import styled from "styled-components";


export const Container = styled.div`
    background: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

`;

export const Image = styled.img`
    margin-top: 30px;

`;

export const User = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }

    Button{
        background: none;
        border: none;
        cursor: pointer;
    }
`