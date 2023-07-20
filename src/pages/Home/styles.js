import styled from "styled-components";


export const Container = styled.div`
    background: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;

`;

export const Image = styled.img`
    margin-top: 15px;

`;

export const InputLabel = styled.p`
    letter-spacing: 0.700px;
    color: #EEEEEE;
    font-size: 18px;
    line-height: 22px;
    margin-left: 10px;
`;

export const Input = styled.input`
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    width: 360px;
    height: 60px;
    border: none;
    outline: none;
    padding-left: 15px;
    font-size: 20px;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 34px;
`;