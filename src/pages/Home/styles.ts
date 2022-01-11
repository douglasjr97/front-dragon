import styled from 'styled-components';
import { FiPlusCircle } from "react-icons/fi";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
 
margin: 16px;
align-items: center;

`;

export const TitlePage = styled.h1`
    color: white;
    font-size: 40px;
    margin-bottom: 32px;
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

export const Input= styled.input`
width: 90%;
height:100px;

border-radius:10px;

color: white;

font-size:18px;
margin-bottom: 16px;
padding:16px;
`;

export const TextArea = styled.textarea`
width: 90%;
height:300px;

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

export const ButtonAdd = styled.button`
    width:150px;
    height: 150px;

    border-radius: 100px;

    background-color:#2C6EF2;
    position: fixed;
    right:30px;
    bottom: 10px;

    align-items:center;
    display:flex;
    justify-content: center;

    &:hover{
            filter: brightness(0.7)
        }


`

export const IconAdd = styled(FiPlusCircle)`
    color: white;
`;