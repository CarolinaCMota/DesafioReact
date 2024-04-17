import styled from 'styled-components';

export const Input = styled.input `  


background-color: ${({theme})=> theme.COLORS.GRAY_300};
border:none;
border-radius: 10px;
display: flex;

align-items: center;
margin-top: 28px;
padding-left: 30px;
width: 700px;
height: 50px;
color: ${({theme}) => theme.COLORS.GRAY_100};



`;