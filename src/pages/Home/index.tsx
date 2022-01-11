import React, { useEffect, useState, useCallback } from 'react';
import { ItemDragon } from '../../components/ItemDragon';
import api from '../../services/api';
import Modal from 'react-modal';
import {
  ButtonAdd,
  ButtonEdit,
  Container,
  ContainerModal,
  IconAdd,
  Input,
  SelectTypeDragon,
  TextArea,
  TitleModal,
  TitlePage,
} from './styles';
import { IDragonItem } from '../../interfaces/IDragonItem';
import dragonsService from '../../services/dragonsService';
import { question, Toast } from '../../plugins/sweetAlert';

export function Home() {
  const [dragons, setDragons] = useState([]);
  const [newInfoModal, setNewInfoModal] = useState(false);
  const [newAddDragonModal, setNewAddDragonModal] = useState(false);
  const [dragonSelected, setDragonSelected] = useState({} as IDragonItem);

  const [nameDragonForm, setNameDragonForm] = useState('');
  const [typeDragonForm, setTypeDragonForm] = useState('');
  const [historyDragonForm, setHistoryDragonForm] = useState('');

  const fetchDragons = useCallback(async () => {
    const response = await dragonsService.getAll();

    const orderedDragons = response.data.sort(
      (dragon1: IDragonItem, dragon2: IDragonItem) => {
        const dragon1Name = dragon1.name.toLowerCase();
        const dragon2Name = dragon2.name.toLowerCase();

        if (dragon1Name < dragon2Name) return -1;
        if (dragon1Name > dragon2Name) return 1;
        return 0;
      }
    );
    setDragons(orderedDragons);
  }, [setDragons]);

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  async function handleAddDragon() {
    try {
      await dragonsService.createOne({
        name: nameDragonForm,
        type: typeDragonForm,
        history: historyDragonForm,
      });

      Toast.fire({ icon: 'success', title: 'Dragão Adicionado' });
      fetchDragons();
      clearForm();
      setNewAddDragonModal(false);
    } catch (error) {
      alert('Não foi possível adicionar');
      console.log(error);
    }
  }

  async function handleDeleteDragon(dragonId: number) {
    const { answer } = await question({
      text: 'Essa operação não poderá ser desfeita',
    });
    if (answer === 'yes') {
      await dragonsService.deleteOne(dragonId);
      fetchDragons();
    } else {
      Toast.fire({ icon: 'info', title: 'O Dragão não foi excluído' });
    }
  }

  function handleSelectDragon(dragonSelected: IDragonItem) {
    setNameDragonForm(dragonSelected.name);
    setTypeDragonForm(dragonSelected.type);
    setHistoryDragonForm(dragonSelected.histories);

    setDragonSelected(dragonSelected);

    setNewInfoModal(true);
  }

  function handleOpenDragonModal() {
    setNewAddDragonModal(true);
  }

  function clearForm() {
    setNameDragonForm('');
    setTypeDragonForm('');
    setHistoryDragonForm('');
  }

  async function handlePutDragon(dragonId: number) {
    try {
      await dragonsService.updateOne({
        dragonId,
        name: nameDragonForm,
        type: typeDragonForm,
        history: historyDragonForm,
      });

      Toast.fire({ icon: 'success', title: 'Dados Alterados' });
      clearForm();
      setNewInfoModal(false);
      fetchDragons();
    } catch (error) {
      Toast.fire({ icon: 'error', title: 'não foi possível alterar os dados' });
      console.log(error);
    }
  }

  function closeModal() {
    setNewInfoModal(false);
  }

  return (
    <>
      <Container>
        <TitlePage>Lista de Dragões</TitlePage>
        {dragons.map((dragon: IDragonItem) => (
          <ItemDragon
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            type={dragon.type}
            histories={dragon.histories}
            createdAt={dragon.createdAt}
            deleteDragon={() => handleDeleteDragon(dragon.id)}
            selectDragon={() => handleSelectDragon(dragon)}
            dragon={dragon}
          />
        ))}

        <hr />
      </Container>
      <Modal
        isOpen={newInfoModal}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <ContainerModal>
          <TitleModal>Edição de Dados</TitleModal>
          <Input
            value={nameDragonForm}
            onChange={(e) => setNameDragonForm(e.target.value)}
            placeholder="Nome do dragão:"
          />
          <Input
            value={typeDragonForm}
            onChange={(e) => setTypeDragonForm(e.target.value)}
            placeholder="Tipo do dragão:"
          />

          <TextArea
            value={historyDragonForm}
            onChange={(e) => setHistoryDragonForm(e.target.value)}
            placeholder="História do dragão:"
          />

          <ButtonEdit onClick={() => handlePutDragon(dragonSelected.id)}>
            Salvar
          </ButtonEdit>
        </ContainerModal>
      </Modal>

      <Modal
        isOpen={newAddDragonModal}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <ContainerModal>
          <TitleModal>Adicionar novo Dragão</TitleModal>
          <Input
            value={nameDragonForm}
            onChange={(e) => setNameDragonForm(e.target.value)}
            placeholder="Nome do dragão:"
          />
          <Input
            value={typeDragonForm}
            onChange={(e) => setTypeDragonForm(e.target.value)}
            placeholder="Tipo do dragão:"
          />

          <TextArea
            value={historyDragonForm}
            onChange={(e) => setHistoryDragonForm(e.target.value)}
            placeholder="História do dragão:"
          />

          <ButtonEdit onClick={() => handleAddDragon()}>Salvar</ButtonEdit>
        </ContainerModal>
      </Modal>

      <ButtonAdd onClick={handleOpenDragonModal}>
        <IconAdd size={50} />
      </ButtonAdd>
    </>
  );
}

const customStyles = {
  content: {
    backgroundColor: '#3E3B47',
    borderRadius: '30px',
  },
};

export default Home;
