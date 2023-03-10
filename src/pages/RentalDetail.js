import React from 'react';
import withRouter  from '../withRouter';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import { capitalize } from 'helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }
  render() {
    const { rental, isFetching } = this.props;
    if(isFetching  || !rental._id) return null;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />

            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
            <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ rental }) => ({ rental: rental.item, isFetching: rental.isFetching })

export default connect(mapStateToProps)(withRouter(RentalDetail));