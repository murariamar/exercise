import immutable from 'immutable';
import {
  EQUIPMENT_ADDED,
  SERVICE_HISTORY_RECIEVED,
 } from '../constants/action-types';

const initialState = {
  equipments: new immutable.List(),
  serviceHistory: [
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
  ],
};

const handleAdd = rawEquipments =>
  ({ equipments: new immutable.List(rawEquipments) });

export default (state = initialState, action) => {
  switch (action.type) {
    case EQUIPMENT_ADDED:
      return { ...state, ...handleAdd(action.value) };
    case SERVICE_HISTORY_RECIEVED:
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export const getEquipments = ({ equipments }) => equipments;

export const getServiceData = ({ serviceHistory }) => serviceHistory;
