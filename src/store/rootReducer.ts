import { combineReducers } from '@reduxjs/toolkit';
import { ListScreenSlice } from '../slices/ListScreenSlice';
import { ProfileScreenSlice } from '../slices/ProfileScreenSlice'

const rootReducer = combineReducers({
    list: ListScreenSlice.reducer,
    profile: ProfileScreenSlice.reducer,
});

export default rootReducer;
