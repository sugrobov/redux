import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        speciality: 'computer systems'
    },
    {
        id: '2',
        speciality: 'historical'
    },
    {
        id: '3',
        speciality: 'physical'
    },
    {
        id: '4',
        speciality: 'mathematical'
    },
    

];

const specialitySlice = createSlice({
    name: 'speciality',
    initialState,
    reducers: {

    }

});

export default specialitySlice.reducer;
