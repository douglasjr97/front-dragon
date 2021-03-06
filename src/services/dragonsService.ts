import api from './api';

/**
 * Request to get all dragons
 */
const getAll = () => {
  return api.get('dragon')
};

/**
 * Request to delete a dragon
 */
const deleteOne = (dragonId: number) => {
  return api.delete(`dragon/${dragonId}`);
}

type UpdateOneParams = {
  dragonId: number;
  name: string;
  type: string;
  history: string;
}

/**
 * Request to update a dragon
 */
const updateOne = ({ dragonId, name, type, history }: UpdateOneParams) => {
  return api.put(`dragon/${dragonId}`, {
    name,
    type,
    histories: [history],
  });
}

type CreateOneParams = {
  name: string;
  type: string;
  history: string;
}

/**
 * Request to create a dragon
 */
const createOne = ({ name, type, history }: CreateOneParams) => {
  
 return api.post('dragon', {
  name,
  type,
  histories: [history]
})
}

const dragonsService = {
  getAll,
  deleteOne,
  updateOne,
  createOne
}



export default dragonsService