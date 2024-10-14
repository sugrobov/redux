import { useSelector } from 'react-redux';
import CardList from '../../components/CardList';

function StudentsList() {

    const students = useSelector(state => state.students);

    return students.map(s => <CardList
        key={s.id}
        id={s.id}
        name={s.name}
        surname={s.surname}
        speciality={s.speciality}

    />); 

}

export default StudentsList;