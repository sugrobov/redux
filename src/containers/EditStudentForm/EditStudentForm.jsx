import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { studentUpdated } from '../../app/parts/students/studentSlice';


function EditStudentForm() {
  const params = useParams();
  const { id } = params;

  const student = useSelector(state => state.students.find(s => s.id === id));

  const [name, setName] = useState(student.name);
  const [surname, setSurname] = useState(student.surname);
  const [speciality, setSpeciality] = useState(student.speciality);
  const [age, setAge] = useState(student.age);
  const [yearOfAdmission, setYearOfAdmission] = useState(student.yearOfAdmission);

  const specialities = useSelector(state => state.speciality);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeSurname = (e) => setSurname(e.target.value);
  const onChangeSpeciality = (e) => setSpeciality(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeYearOfAdmission = (e) => setYearOfAdmission(e.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveStudent = () => {
    
    dispatch(studentUpdated({
      id: id,
      name,
      surname,
      speciality,
      age,
      yearOfAdmission
    }
    )
    );
    navigate(`/students/${id}`)


  }

  const specialityList = specialities.map(s => (
    <option key={s.id} value={s.id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {s.speciality}
    </option>
));


  return (
    <form>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-5/6 md:w-3/6 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Редактировать студента</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Имя</label>
              <input type="text" id="name" name="name" value={name} onChange={onChangeName} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="surname" className="leading-7 text-sm text-gray-600">Фамилия</label>
              <input id="surname" name="surname" value={surname} onChange={onChangeSurname} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="speciality" className="leading-7 text-sm text-gray-600">Специальность</label>
              <select id="speciality" value={speciality} onChange={onChangeSpeciality} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option defaultValue={specialities[speciality]}></option>
                {specialityList}
              </select>
            </div>
            <div className="relative mb-4">
              <label htmlFor="age" className="leading-7 text-sm text-gray-600">Возраст</label>
              <input id="age" name="age" value={age} onChange={onChangeAge} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="yearOfAdmission" className="leading-7 text-sm text-gray-600">Год поступления</label>
              <input type="number" id="yearOfAdmission" name="yearOfAdmission" value={yearOfAdmission} onChange={onChangeYearOfAdmission} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button type="button" onClick={onSaveStudent} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ok</button>
            <p className="text-xs text-gray-500 mt-3">Пожалуйста, заполните все поля.</p>
          </div>
        </div>
      </section>
    </form>
  )

}

export default EditStudentForm;