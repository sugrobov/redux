import { useNavigate } from "react-router-dom";
import SelectSpeciality from "../../app/parts/speciality/SelectSpeciality";


function Card({ name, surname, speciality, age, yearOfAdmission }) {
  
  const navigate = useNavigate();
   let s = <SelectSpeciality /** выбрали специальность */
           id={speciality} 
 />;

//  console.log(`выбор ${s} специальность ${speciality}`)
  
  return (
    <div className="mx-5 my-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="pt-6">
        <span className="text-lg font-semibold leading-tight text-gray-900 dark:text-white">{name} {surname}</span>
        <ul className="mt-2 flex-col gap-4">
        <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Специальность: {s}</p>
          </li>
          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Возраст: {age}</p>
          </li>

          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Год поступления: {yearOfAdmission}</p>
          </li>
        </ul>
        <button onClick={() => navigate(`/`)} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Вернуться</button>
      </div>
    </div>
  )
}

export default Card;