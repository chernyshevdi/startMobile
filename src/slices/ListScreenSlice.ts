import { createSlice, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { IAnimal } from './ProfileScreenSlice';

interface SliceState {
  animalList: Array<IAnimal>
}

const initialState: SliceState = {
  animalList: []
};

export const ListScreenSlice = createSlice({
  name: 'ListScreenSlice',
  initialState,
  reducers: {
    setAnimalList(state, action) {
      state.animalList = action.payload;
    },
  },
});

export const ListScreenActionCreators = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...ListScreenSlice.actions,
    },
    dispatch,
  );
};
