import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as tripActionCreators from '../../actions/tripActionCreators';

const TripList = () => {
  const { isFetching, error, trips } = useSelector((state) => state.trip);
  const dispatch = useDispatch();
  const { getTripRequest, deleteTripRequest } = bindActionCreators(tripActionCreators, dispatch);

  // const [searchTerm, setSearchTerm] = useState('');
  // const [ setSearchResults] = useState([]);

  useEffect(() => {
    getTripRequest();
  }, []);

  const handleDelete = (tripId) => {
    dispatch(deleteTripRequest(tripId));
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   if (searchTerm === '') {
  //     setSearchResults([]);
  //   } else {
  //     const filtered = trips.filter(
  //       (trip) =>
  //         trip.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         trip.arrival.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     const sorted = filtered.sort((a, b) => {
  //       const aMatches =
  //         a.departure.toLowerCase().includes(searchTerm.toLowerCase()) +
  //         a.arrival.toLowerCase().includes(searchTerm.toLowerCase());
  //       const bMatches =
  //         b.departure.toLowerCase().includes(searchTerm.toLowerCase()) +
  //         b.arrival.toLowerCase().includes(searchTerm.toLowerCase());
  //       return bMatches - aMatches;
  //     });
  //     setSearchResults([...new Set(sorted)]);
  //   }
  // };

  // const displayTrips =  trips ;

  return (
    <section>
      {isFetching && <h2>Trip List</h2>}
      {error && <p>Error!{JSON.stringify(error)}</p>}
      <form >
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            
            onChange={(event) => (event.target.value)}
          />
        </div>
      </form>
      {trips.length > 0 ? (
        <div>
          <h3>All Trips:</h3>
          <ul>
            {trips.map((tripI) => (
              <li key={tripI._id} >
                <p>
                  <strong>Departure:</strong> {tripI.departure}
                </p>
                <p>
                  <strong>Arrival:</strong> {tripI.arrival}
                </p>
                <p>
                  <strong>Departure Time:</strong>{' '}
                  {new Date(tripI.departureTime).toLocaleString()}
                </p>
                <p>
                  <strong>Arrival Time:</strong>{' '}
                  {new Date(tripI.arrivalTime).toLocaleString()}
                </p>
                <button onClick={() => handleDelete(tripI._id)}> delete</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No trips found.</p>
      )}
    </section>
  );
};

export default TripList
