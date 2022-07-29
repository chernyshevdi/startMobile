import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const baseURL = 'https://zoo-animal-api.herokuapp.com/';

export enum APIStatus {
  Initial = 'Initial',
  Loading = 'Loading',
  Success = 'Success',
  Failure = 'Failure',
}

const getCallApi = () => props => async () => {
  const {
    url,
    onSuccess,
    onError,
    config,
  } = props;
  let response;

  try {
  const method = config?.method;

  if (method && method.toLowerCase() === 'get') {
    response = await axios.get((baseURL) + url, config);
  }

  if (response.data && onSuccess) {
    onSuccess(response.data);
  }
  } catch(error) {
  if (onError && error && error.response && error.response.data) {        
    if (error.response.data.errors) onError(error.response.data.errors);
    else onError(error.response.data.message);
  }
}
}

const callAPI = getCallApi();

const getAnimals = (args) => {
  return callAPI({
    url: "animals/rand/10",
    config: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ...args
  });
};

export const APIs = {
    getAnimals
};

export const animalAPI = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
      {
        ...APIs,
      },
      dispatch,
    );
  };