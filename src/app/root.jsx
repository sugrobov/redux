import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

import NewStudentForm from '../containers/NewStudentForm';

import { Outlet } from 'react-router-dom';


function Root() {

    return (
        <>
            <Header />
            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <SideBar />
                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-20">
                    <h1 className="text-2xl md:text-4xl">Main Content</h1>
                    <div className="flex flex-wrap -m-4 justify-center">
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Root;