import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;

p {
background: ${({ theme }) => theme.COLORS.GRAYPINK};
color: white;
font-size: 15px;
margin-left: 20px;
padding: 10px;
border-radius: 15px;

}`