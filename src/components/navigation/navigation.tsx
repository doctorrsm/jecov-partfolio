import {useDispatch} from 'react-redux';
import {changeCurrentPage} from '../../store/data-slice';

export default function Navigation() {
    const dispatch = useDispatch();
    return(
        <nav>
            <button type="button" onClick={() =>{dispatch(changeCurrentPage('main'))}}>Главная</button>
            <button type="button" onClick={() =>{dispatch(changeCurrentPage('about'))}}>Обо мне</button>
            <button type="button" onClick={() =>{dispatch(changeCurrentPage('skills'))}}>Мои навыки</button>
            <button type="button" onClick={() =>{dispatch(changeCurrentPage('contact'))}}>Контакты</button>
        </nav>
    )
}
