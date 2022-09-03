import Navbar from "../navbar/navbar";
import Content from '../content/content';
import './layout.css';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export default function Layout() {

    const currentPage = useAppSelector(state => state.data.currentPage);

    const isMain = currentPage === 'main';

    const styles = StyleSheet.create({
        bounce: {
            animationName: bounce,
            animationDuration: '1s'
        }
    })

  return (
    <>
      <Navbar />
      <main className='page-main'>
          <div className='image-wrapper'>
              {!isMain && <h1>Олег Жеков</h1>}
        <img src="https://picsum.photos/400/600" alt="" />

          </div>

              <Content />

      </main>
    </>
  );
}
