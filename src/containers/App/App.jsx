import React, { useRef, useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '../../app/root';
import StudentsList from '../StudentsList';
import NewStudentForm from '../NewStudentForm';
import StudentPage from '../StudentPage';
import EditStudentForm from '../EditStudentForm/EditStudentForm';
import ErrorPage from '../../components/ErrorPage';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <StudentsList />

            },
            {
                path: '/add',
                element: <NewStudentForm />
            },
            {
                path: '/students/:id',
                element: <StudentPage />
            },
            {
                path: '/editStudent/:id',
                element: <EditStudentForm />
            }

        ]
    }
])


function App() {


    return <RouterProvider router={router} />
}

export default App;