import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Card from "../../components/Card";


function StudentPage() {
    let param = useParams();
    let { id } = param;

    const student = (id) = useSelector(state => state.students.find(s => s.id === id));

    if (student) {
        return <Card
            name={student.name}
            surname={student.surname}
            speciality={student.speciality}
            age={student.age}
            yearOfAdmission={student.yearOfAdmission}
        />
    } else {

        return (
            <div>no student found</div>
        )
    }
}

export default StudentPage;