import styled from 'styled-components';

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-top: 40px;
    background: ${props => props.isBack ? '#FFFFFF24' : '#D93856'};
    border: none;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;