import {useDispatch} from 'react-redux';
import {changeCurrentPage} from '../../store/data-slice';
import './navigation.css';
import {PageNames} from '../../const';
import {useAppSelector} from '../../store/hooks';

export default function Navigation() {
    const dispatch = useDispatch();
    const currentPage = useAppSelector((state) => state.data.currentPage)

    return(
        <nav>
            <button className={currentPage === PageNames.Home ? 'active' : undefined} type="button" onClick={() =>{dispatch(changeCurrentPage(PageNames.Home))}}>Главная</button>
            <button className={currentPage === PageNames.About ? 'active' : undefined} type="button" onClick={() =>{dispatch(changeCurrentPage(PageNames.About))}}>Обо мне</button>
            <button className={currentPage === PageNames.Skills ? 'active' : undefined} type="button" onClick={() =>{dispatch(changeCurrentPage(PageNames.Skills))}}>Мои навыки</button>
            <button className={currentPage === PageNames.Contact ? 'active' : undefined} type="button" onClick={() =>{dispatch(changeCurrentPage(PageNames.Contact))}}>Контакты</button>
        </nav>
    )
}
