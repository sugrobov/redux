

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SelectSpeciality from "../../app/parts/speciality/SelectSpeciality";

import { studentDelete } from "../../app/parts/students/studentSlice";

function CardList({ id, name, surname, speciality }) {
    const dispatch = useDispatch();

    let s = <SelectSpeciality /** выбрали специальность */
        id={speciality}
    />;


    return (
        <div className="mx-5 my-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
                <Link to={`/students/${id}`}>
                    <img className="mx-auto h-full dark:hidden" src={`https://robohash.org/${id}`} alt={`${id}`} />
                </Link>
            </div>
            <div className="pt-6">
                <div className="mb-4 flex justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">{s}</span>

                </div>
                <Link to={`/students/${id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{name} {surname}</Link>
            </div>
            <div className="pt-6">
                <Link className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" to={`/editStudent/${id}`}>edit</Link>
                <button onClick={()=>dispatch(studentDelete(id))} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">delete</button>
            </div>
        </div>
    )
}

export default CardList;