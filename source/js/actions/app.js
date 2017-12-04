import {
  EQUIPMENT_ADDED,
  SERVICE_HISTORY_RECIEVED,
 } from '../constants/action-types';

const equipments = [];
const serviceHistory = [
  {
    date: '10/12/2016',
    description: 'Recalibration and systme ush done by Jim Murphy',
  },
  {
    date: '10/12/2016',
    description: 'updated mware to version 2.2.1',
  },
  {
    date: '10/12/2016',
    description: 'updated mware to version 2.2.1',
  },
  {
    date: '10/12/2016',
    description: 'updated mware to version 2.2.1',
  },
  {
    date: '10/12/2016',
    description: 'updated mware to version 2.2.1',
  },
];


export const addEquipment = (equipment) => (dispatch) => {
  equipments.push(equipment);
  dispatch({ type: EQUIPMENT_ADDED, value: equipments });
};

export const getServiceHistory = () => (dispatch) => {
  dispatch({ type: SERVICE_HISTORY_RECIEVED, value: serviceHistory });
};
