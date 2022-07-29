import React from 'react';
import { animalAPI } from '../../api';
import { APIStatus } from '../../api';
import { ListScreenActionCreators } from '../../slices/ListScreenSlice';

export const useGetAnimals = () => {
  const [status, setStatus] = React.useState<any>(APIStatus.Initial);
  const { getAnimals } = animalAPI();
  const { setAnimalList } = ListScreenActionCreators();

  const fetch = React.useCallback(() => {
    setStatus(APIStatus.Loading);
    getAnimals({
      onSuccess: response => {
        setAnimalList(response);
        setStatus(APIStatus.Success);
      },
      onError: (err) => {
        console.log(err)
        setStatus(APIStatus.Failure);
      },
    });
  }, []);

  return { fetch, status };
};