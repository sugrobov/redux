import { useSelector } from "react-redux"

/**
 * возвращает специальность из state
 */
function SelectSpeciality({ id }) {

    const s = useSelector(state => state.speciality.find(s => s.id === id));
    // console.log(`поиск специальности ${s['speciality']}`)
    // const s = useSelector(state => state.speciality);
    if (s) return s['speciality'];

    return null;
    
}

export default SelectSpeciality;