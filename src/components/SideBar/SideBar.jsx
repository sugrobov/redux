
import { Link } from 'react-router-dom';
import NewStudentForm from '../../containers/NewStudentForm';

function SideBar() {
    return (
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-10">
            <h1 className="text-2xl md:text-4xl">Sidebar</h1>
                <NewStudentForm />
        </aside>
    )
}

export default SideBar;