import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: row;
height: 100vh;




div:first-child {
    width: 40%;
    margin: auto;
   padding-left: 80px;
   margin-top: 50px;

  
}

div:last-child{
    width: 60%;
}

img{
    width: 100%;
}

h1 {
    
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
}

p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 14px;
    margin-bottom: 50px;
}

h2 {
font-size: 24px;
margin-bottom: 50px;
}

input, button {
    width: 60%; 
    margin-bottom: 15px;
}

`;