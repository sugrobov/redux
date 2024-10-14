import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        name: 'student 1',
        surname: 'Ivanov',
        speciality: '2',
        age: '18',
        yearOfAdmission: '1991'
    },
    {
        id: '2',
        name: 'student 2',
        surname: 'Yakovlev',
        speciality: '1',
        age: '19',
        yearOfAdmission: '1996'
    },
    {
        id: '3',
        name: 'student 3',
        surname: 'Donskoy',
        speciality: '3',
        age: '17',
        yearOfAdmission: '1998'
    },
    {
        id: '4',
        name: 'student 4',
        surname: 'Zamkovoy 1',
        speciality: '1',
        age: '28',
        yearOfAdmission: '1998'
    },
    {
        id: '5',
        name: 'student 5',
        surname: 'Zamkovoy 2',
        speciality: '4',
        age: '28',
        yearOfAdmission: '1998'
    },
    {
        id: '6',
        name: 'student 6',
        surname: 'Zamkovoy 3',
        speciality: '1',
        age: '28',
        yearOfAdmission: '1998'
    }
];

const studentSlice = createSlice({

    name: 'students',
    initialState,
    reducers: {
        // studentAdded (state, action) {
        //     state.push(action.payload)
        // },
        studentAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, surname, speciality, age, yearOfAdmission) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        surname,
                        speciality,
                        age,
                        yearOfAdmission,
                    }
                }
            }

        },
        studentUpdated: {
            reducer(state, action) {

                const { id,
                    name,
                    surname,
                    speciality,
                    age,
                    yearOfAdmission } = action.payload;

                const findStudent = state.find(s => s.id === id);
                if (findStudent) {
                    findStudent.name = name;
                    findStudent.surname = surname;
                    findStudent.speciality = speciality;
                    findStudent.age = age;
                    findStudent.yearOfAdmission = yearOfAdmission;

                }
            }
        },
        studentDelete: {
            
            reducer(state, action) {
              
                return state.filter(s => s.id !== action.payload);
            }
        }


    }

}
);

export const { studentAdded, studentUpdated, studentDelete } = studentSlice.actions;
export default studentSlice.reducer;