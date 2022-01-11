import React from "react";
import DragonImg from "../../assets/dragon.png";
import {
  Container,
  Content,
  DateContent,
  Date,
  ImageDragon,
  Options,
  Title,
  IconDragon,
  DateIcon,
  Delete,
  IconDelete,
  Info,
  IconInfo,
  TypeDragonContainer,
  TypeDragon,
  HistoryContainer,
  History

} from "./styles";
import { IDragonItem } from "../../interfaces/IDragonItem";
import { formatDate } from "../../utils/helpers";



interface Props {
  id: number;
  createdAt: Date;
  name: string;
  type: string;
  histories:any;
  deleteDragon: (id: number) => Promise<void>;
  selectDragon: (dragonSelected: IDragonItem) => void;

  dragon: IDragonItem;
}
export function ItemDragon({
  id,
  name,
  type,
  createdAt,
  deleteDragon,
  selectDragon,
  dragon,
  histories
}: Props) {
  return (
    <Container>
      <ImageDragon src="https://cdn-icons.flaticon.com/png/512/3275/premium/3275371.png?token=exp=1641846846~hmac=ae46c4383fb7df4c137bb564ccdbb6ff" />
      <Content>
        <Title>{name}</Title>
        <TypeDragonContainer>
          <IconDragon color="red " size={24} />
          <TypeDragon>{type}</TypeDragon>
        </TypeDragonContainer>
        <DateContent>
          <DateIcon color="white" />
          <Date>Criado em {formatDate(createdAt)}</Date>
        </DateContent>

        <HistoryContainer>
          {histories[0] ?(
          <History>"{histories[0]}"</History>
          ):(
            <History>Não há história</History>
          )}
         
          
        </HistoryContainer>
      </Content>
      <Options>
        <Info onClick={() => selectDragon(dragon)}>
          <IconInfo size={30} />
        </Info>

        <Delete onClick={() => deleteDragon(id)}>
          <IconDelete size={30} />
        </Delete>
      </Options>
    </Container>
  );
}
