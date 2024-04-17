import styled from 'styled-components';

export const Container = styled.div`

margin-left: 100px;
margin-right: 100px;
align-items: center;
margin-top: 50px;

.estilo {    
display: flex;
flex-direction: row;
}

button{
    width:200px;
    margin-left: auto;
}


.resumo{
background: ${({theme})=> theme.COLORS.GRAY_300};
padding: 30px;
border-radius: 20px;
margin-top: 50px;
}

h2{
    display: flex;
    flex-direction: column;
}
`