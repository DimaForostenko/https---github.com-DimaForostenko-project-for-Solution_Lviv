import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as tripActionCreators from '../../actions/tripActionCreators';

const TripList = () => {
  const {isFetching,error, trips} = useSelector((state) => state.trip);
  const dispatch = useDispatch();
  const { getTripRequest } = bindActionCreators(
    tripActionCreators, 
    dispatch);
  useEffect(() => {
    getTripRequest();
  }, []);
  return (
    <section>
      {isFetching && <h2>Trip List</h2>}
      {error&&<p>Error!{JSON.stringify(error)}</p>}
      { trips.length > 0 ? (
        <ul>
          {trips.map((trip) => (
            <li key={trip._id}>
              <p><strong>Departure:</strong> {trip.departure}</p>
              <p><strong>Arrival:</strong> {trip.arrival}</p>
              <p><strong>Departure Time:</strong> {new Date(trip.departureTime).toLocaleString()}</p>
              <p><strong>Arrival Time:</strong> {new Date(trip.arrivalTime).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No trips found.</p>
      )}
    </section>
  );
};

export default TripList;