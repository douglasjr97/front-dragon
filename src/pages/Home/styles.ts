import styled from 'styled-components';
import { FiPlusCircle } from "react-icons/fi";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
 
margin: 2rem;
align-items: center;

`;

export const TitlePage = styled.h1`
    color: white;
    font-size: 2.5rem;
    margin-bottom: 2rem;
`;
export const TitleModal = styled.h1`
    color: white;
    font-size: 3rem;
`;
export const ContainerModal= styled.div`
display:flex;
flex:1;
flex-direction: column;
background-color: #3E3B47;
align-items: center;
`;



export const TextArea = styled.textarea`
width: 90%;
height:19rem;

border-radius:10px;

color: white;

font-size:1rem;
margin-bottom: 1rem;
padding:1rem;

`;

export const ButtonEdit = styled.button`
    width: 90%;
    height: 5rem;
    background-color: green;
    font-size: 1.5rem;
    color: white;
`;

export const ButtonAdd = styled.button`
    width:10rem;
    height: 10rem;

    border-radius: 100px;

    background-color:#2C6EF2;
    position: fixed;
    right:3rem;
    bottom: 0.6rem;

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