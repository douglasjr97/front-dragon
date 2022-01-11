import React, { useEffect, useState } from "react";
import { ItemDragon } from "../../components/ItemDragon";
import api from "../../services/api";
import Modal from 'react-modal';
import { ButtonEdit, Container, ContainerModal, InputNameDragon, SelectTypeDragon, TitleModal } from "./styles";

export function Home() {
  const [dragons, setDragons] = useState([]);
  const [newInfoModal,setNewInfoModal]=useState(true);
  useEffect(() => {
    api.get("dragon").then((response) =>
         setDragons(response.data)
      
    );
  }, []);

  async function handleAddDragon() {
    const response = await api.post("dragon", {
      name: "Double Dragon",
      type: "Flamejante",
      histories: [],
    });
  }

  async function handleDeleteDragon() {
    const response = await api.delete(`dragon/15`, {});
  }

  async function handlePutDragon() {
      const response = await api.put(`dragon/14`, {
          name: "Double Dragon X"
      })
  }

  function closeModal(){
    setNewInfoModal(false)
  }

  return (
    <>
    <Container>
      {dragons.map(dragon=>(
      <ItemDragon />
      ))}
     

     
      <hr />
      <button onClick={handleAddDragon}>Adicionar novo Dragão</button>
      <button onClick={handleDeleteDragon}>Deletar Dragão</button>
      <button onClick={handlePutDragon}>Atualizar Dragão</button>
      
    </Container>
      <Modal isOpen={newInfoModal} style={customStyles} onRequestClose={closeModal}>
          <ContainerModal>
            <TitleModal>Edição de Dados</TitleModal>
            <InputNameDragon value="" placeholder="Nome do dragão:"/>
            <SelectTypeDragon>
              <option>Cromatico</option>
              <option>Maluquinho</option>
              <option>File</option>
              </SelectTypeDragon>
            <InputNameDragon value="Cromatico"/>

            <ButtonEdit>
              Salvar
              </ButtonEdit>
         

          </ContainerModal>
      </Modal>
    </>
  );
}

const customStyles = {
  content: {
   
   
    backgroundColor:'#3E3B47',
    borderRadius:'30px'
  },
};

export default Home;
