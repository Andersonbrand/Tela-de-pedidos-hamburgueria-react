import styled from 'styled-components';

export const Button = styled.button`
width: Hug (342px);
height: Hug (68px);
top: 778px;
left: 36px;
gap: 14px;
padding: 0px 113px 0px 113px;
border: none;
background: ${props => props.isBack ? 'black' : '#D93856'};
cursor: pointer;

&:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

