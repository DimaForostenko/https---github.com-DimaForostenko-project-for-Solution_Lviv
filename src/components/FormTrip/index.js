import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector,useDispatch } from 'react-redux';
import * as tripActionCreators from "../../actions/tripActionCreators"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const citySchema = Yup.string().required().matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, { message: 'Invalid city name' });

const validationSchema = Yup.object().shape({
  departure: Yup.string().required('Departure city is required').matches(citySchema, { message: 'Invalid departure city' }),
  arrival: Yup.string().required('Arrival city is required').matches(citySchema, { message: 'Invalid arrival city' }),
  departureTime: Yup.date().required('Departure time is required'),
  arrivalTime: Yup.date().required('Arrival time is required'),
});

const initialValues = {
  departure: '',
  arrival: '',
  departureTime: '',
  arrivalTime: '',
};

const FormTrip = () => {
  const dispatch = useDispatch();
  const {createTripRequest}= bindActionCreators(
   tripActionCreators,
   dispatch);
  const handleSubmit = (values,formikBag) => {
    // Handle form submission
    createTripRequest(values)
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="departure">Departure</label>
            <Field type="text" id="departure" name="departure" />
            <ErrorMessage name="departure" />
          </div>
          <div>
            <label htmlFor="arrival">Arrival</label>
            <Field type="text" id="arrival" name="arrival" />
            <ErrorMessage name="arrival" />
          </div>
          <div>
            <label htmlFor="departureTime">Departure Time</label>
            <Field type="datetime-local" id="departureTime" name="departureTime" />
            <ErrorMessage name="departureTime" />
          </div>
          <div>
            <label htmlFor="arrivalTime">Arrival Time</label>
            <Field type="datetime-local" id="arrivalTime" name="arrivalTime" />
            <ErrorMessage name="arrivalTime" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTrip;


