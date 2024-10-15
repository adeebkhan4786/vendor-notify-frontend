import axios from 'axios';

// Action Types
export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SET_LOADING = 'SET_LOADING';


export const submitForm = (formData) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  const result = await axios.post(`http://localhost:4000/api/v1/vendors/sendingMail`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(result.data.message)
  dispatch({ type: SET_LOADING, payload: false });
  dispatch({ type: FETCH_CAMPAIGNS, payload: result.data.message });
};
