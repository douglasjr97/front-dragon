import React from 'react';
import DragonImg from '../../assets/dragon.png';
import {
  Container, Content, DateContent,Date, ImageRepository, SubjectContent,Options, SubjectCount, Title, IconDragon, DateIcon, Delete, IconDelete, Info, IconInfo
} from './styles';
import {IDragonItem} from '../../interfaces/IDragonItem';

interface Props extends IDragonItem{
  onClick:()=>void;
}

export function ItemDragon() {
  return (
    <Container >
    <ImageRepository src="https://cdn-icons.flaticon.com/png/512/3275/premium/3275371.png?token=exp=1641846846~hmac=ae46c4383fb7df4c137bb564ccdbb6ff" />
    <Content>
        <Title>Dragão Sonolento</Title>
        <SubjectContent>
          
        <IconDragon color="red" size={24}/>
                <SubjectCount>
                    Flamenjante
                </SubjectCount>
           
        </SubjectContent>
        <DateContent>
            <DateIcon color="white"/>
            <Date>Criado em 23/06/2021</Date>
        </DateContent>
    </Content>
    <Options>
    <Info>
      <IconInfo size={30}/>
    </Info>

    <Delete>
        <IconDelete size={30}/>
    </Delete>

    </Options>
</Container>
  );
}