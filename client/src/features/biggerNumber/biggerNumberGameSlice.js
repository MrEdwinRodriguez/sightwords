import { createSlice } from '@reduxjs/toolkit';
const UNITS = [{_id: 1, unit: 1, max: 10, min: 1}, {_id: 2, unit: 2, max: 20,  min: 10}, {_id: 3, unit: 3, max: 100, min: 1},  {_id: 4, unit: 4, max: 1000, min: 1}];

const initialState = {
	units: UNITS
}

const biggerNumberGameSlice = createSlice({
	name: 'biggerNumberGame',
	initialState
});

export const biggerNumberGameReducer = biggerNumberGameSlice.reducer;

export const selectUnitById = (id) => (state) => {
	return state.biggerNumberGame.units.find(
        (unit) => unit._id === parseInt(id)
    );
};

export const getAllUnits = (state) => {
	return state.biggerNumberGame.units;
};