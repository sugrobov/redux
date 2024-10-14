import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './parts/students/studentSlice';
import specialityReducer from './parts/speciality/specialitySlice';

export default configureStore({
    reducer: {
        students: studentReducer,
        speciality: specialityReducer

    }
})