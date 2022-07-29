import { createSlice, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface IAnimal {
  name?: string;
  latin_name?: string;
  animal_type?: string;
  active_time?: string;
  length_min?: string;
  length_max?: string;
  weight_min?: string;
  weight_max?: string;
  lifespan?: string;
  habitat?: string;
  diet?: string;
  geo_range?: string;
  image_link?: string;
  id?: number;
}

interface SliceState {
  animalData: IAnimal
}

const initialState: SliceState = {
  animalData: {}
};

export const ProfileScreenSlice = createSlice({
  name: 'ProfileScreenSlice',
  initialState,
  reducers: {
    setAnimalData(state, action) {
      state.animalData = action.payload;
    },
  },
});

export const ProfileScreenActionCreators = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...ProfileScreenSlice.actions,
    },
    dispatch,
  );
};
