import Navbar from "../navbar/navbar";
import Content from '../content/content';
import './layout.css';
import {useAppSelector} from '../../store/hooks';
import {bounce} from 'react-animations';
import {StyleSheet} from 'aphrodite';
import {PageNames} from '../../const';

export default function Layout() {

    const currentPage = useAppSelector(state => state.data.currentPage);

    const isMain = currentPage === PageNames.Home;

    const styles = StyleSheet.create({
        bounce: {
            animationName: bounce,
            animationDuration: '1s'
        }
    })

    return (
        <>
            <Navbar/>
            <main className='page-main'>
                <div className='image-wrapper'>

                    <img className='avatar' src="/img/avatar.jpg" alt="Олег Жеков"/>

                </div>

                <Content/>

            </main>
        </>
    );
}
