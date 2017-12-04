import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addEquipment,
} from '../../actions/app';
import {
  getEquipments,
} from '../../reducers/app';
import ServiceDetails from '../../components/ServiceDetails';
import EquipmentDetails from '../../components/EquipmentDetails';

const mapStateToProps = state => ({
  equipments: getEquipments(state),
});

@connect(mapStateToProps, { addEquipment })
export default class Dashboard extends Component {
  static propTypes = {
    addEquipment: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // this.props.getServiceHistory();
  }

  extractEquipmentData = ({ equipmemntName, vendor, location, model, serialNo, description }) => ({
    equipmemntName: equipmemntName.value,
    vendor: vendor.value,
    location: location.value,
    model: model.value,
    serialNo: serialNo.value,
    description: description.value,
  });

  handleSubmit = event => {
    event.preventDefault();
    const data = this.extractEquipmentData(event.target);
    this.props.addEquipment(data);
  };

  render() {
    return (
      <div className='equipment'>
        <div className='equipment__details--new'>
          <h3 className='equipment__header'>
            Equipment Details
          </h3>
          <form className='add__equipment--details' onSubmit={ this.handleSubmit }>
            <label htmlFor='equipmemntName'>Equipment Name</label>
            <input type='text' id='equipmemntName' />
            <label htmlFor='vendor'>Equipment Name</label>
            <input type='text' id='vendor' />
            <label htmlFor='location'>Vendor</label>
            <input type='text' id='location' />
            <label htmlFor='model'>Location</label>
            <input type='text' id='model' />
            <label htmlFor='SerialNo'>Serial #</label>
            <input type='text' id='serialNo' />
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' />
            <button>Add Equipment</button>
          </form>
        </div>
        <div>
          <ServiceDetails />
          <EquipmentDetails />
        </div>
      </div>
    );
  }
}
