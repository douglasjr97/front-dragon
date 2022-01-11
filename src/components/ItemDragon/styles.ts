import styled from 'styled-components';
import { GiDragonHead } from "react-icons/gi";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import { IoPencil } from "react-icons/io5";

export const Container = styled.div`
    display:flex;
    flex:1;
    background-color: #3E3B47;

    width: 80%;
    height: 150px;
    flex-direction: row;

    border-radius: 10px;

    margin-bottom: 16px;


    
`;

export const Content = styled.div`
    display:flex;
    flex:1;
    flex-direction: column;

    
`;

export const DateIcon = styled(BsFillCalendarMonthFill)`
    margin-right: 7px;
`;

export const DateContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.p`
   color: white;
   font-family:'Roboto';
`;


export const ImageRepository = styled.img`
    width: 80px;
    height: 80px;
    margin: 20px 16px;
    border-radius: 40px;
`;
export const Title = styled.p`
    
    color: white;
    font-family:'Roboto';
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const IconDragon = styled(GiDragonHead)`
  margin-right: 7px;
`;

export const SubjectContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const SubjectCount = styled.div`
    font-family: 'Roboto';
    color:#999591;
`;

export const Delete = styled.div`
  display:flex;
  background-color: red;
  height:100%;
  width: 100px;
  border-radius: 0 10px 10px 0;
  align-items:center;
  justify-content:center;
  
 
  cursor: pointer;

  &:hover{
            filter: brightness(0.7)
        }
`;

export const Info = styled.div`
  display:flex;
  background-color: red;
  height:100%;
  width: 100px;
  align-items:center;
  justify-content:center;
  

  cursor: pointer;

  background-color:#2C6EF2;

  &:hover{
            filter: brightness(0.7)
        }
`;

export const IconDelete = styled(AiFillDelete)`
`;

export const IconInfo = styled(IoPencil)`

`;

export const Options = styled.div`
display:flex;
flex-direction: row;

margin-left: 70%;
`;