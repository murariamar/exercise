import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getEquipments,
} from '../reducers/app';

const mapStateToProps = ({ app }) => {
  return { equipments: getEquipments(app) };
};

const EquipmentDetails = ({ equipments }) => {
  return (
    <div className='equipment__details'>
      <h3 className='equipment__details--header'>Equipments</h3>
      <ul className='equipment__history'>
        {equipments && equipments.map((equipment, i) =>
          (<li key={ i + equipment.serialNo } >
            <span className='equipment__serial-no'>{equipment.serialNo}</span>
            <span className='equipment__dsecription'>{equipment.equipmemntName}</span>
          </li>)
        )}
      </ul>
    </div>
  );
};

EquipmentDetails.propTypes = {
  equipments: PropTypes.object.isRequired,
};

const List = connect(mapStateToProps)(EquipmentDetails);
export default List;
