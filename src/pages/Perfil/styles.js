import styled from 'styled-components';

export const Container = styled.div`
div:first-child {

width: 100%;
background-color: ${({ theme }) => theme.COLORS.GRAYPINK};
padding: 8px;
height: 140px;

}


div:nth-child(2) {
    text-align: center;
}

img{
    
 height: 200px;
 width: 200px;
 border-radius: 50%;
 margin-top: -100px;
}

input {
  margin: 25px auto;
  text-align: center;
}

button{
    width: 700px;
    text-align: center;

    

}
form{
  
text-align: center;
}
`