import styled from 'styled-components';

export const Container = styled.div`
  
 
margin: 16px;

`;
export const TitleModal = styled.h1`
    color: white;
    font-size: 48px;
`;
export const ContainerModal= styled.div`
display:flex;
flex:1;
flex-direction: column;
background-color: #3E3B47;
align-items: center;
`;

export const InputNameDragon= styled.input`
width: 90%;
height:100px;

border-radius:10px;

color: white;

font-size:18px;
margin-bottom: 16px;
padding:16px;
`;

export const SelectTypeDragon = styled.select`
width: 90%;
height:100px;
background-color: #363F5F;
border-radius:10px;
font-size:18px;
color:white;
margin-bottom: 16px;
padding:16px;
`;

export const ButtonEdit = styled.button`
    width: 90%;
    height: 70px;
    background-color: green;
    font-size: 24px;
    color: white;
`;