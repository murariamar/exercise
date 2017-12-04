import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getServiceData,
} from '../reducers/app';

const mapStateToProps = ({ app }) => ({
  serviceHistory: getServiceData(app),
});

const ServiceDetails = ({ serviceHistory }) => {
  return (
    <div className='service__details'>
      <h3 className='service__details--header'>Service</h3>
      <ul className='service__history'>
        {serviceHistory && serviceHistory.map((serviceDetails, i) =>
          (<li key={ i + serviceDetails.date } >
            <span className='service__date'>{serviceDetails.date}</span>
            <span className='service__dsecription'>{serviceDetails.description}</span>
          </li>)
        )}
      </ul>
    </div>
  );
};

ServiceDetails.propTypes = {
  serviceHistory: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    serviceDetails: PropTypes.string,
  })),
};

export default connect(mapStateToProps)(ServiceDetails);
