import { FETCH_SERVICES, FETCH_CAMPAIGNS, SET_LOADING } from './actions';

const initialState = {
  services: [],
  campaigns: [],
  loading: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return { ...state, services: action.payload };
    case FETCH_CAMPAIGNS:
      return { ...state, campaigns: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
