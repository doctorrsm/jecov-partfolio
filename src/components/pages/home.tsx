import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeCurrentPage} from '../../store/data-slice';
import Typed from 'react-typed';
import './home.css';

export default function Home() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.data);
    const status = useAppSelector(state => state.data.dataStatus);


    if(status === 'Idle') {
        return <>
        <p>Loading</p>
        </>
    }

    console.log(data.data)
    const page = data.data.pages[0];

  return (
    <>
      <h3 className="name">{page.title}</h3>

       <p className="swipedText">
           <Typed
           strings={page.specialisation}
           typeSpeed={100}
           backSpeed={25}
           backDelay={1500}
           loop
       />
    </p>
      <button
          className='button'
          type='button'
          onClick={() =>{dispatch(changeCurrentPage('about'))}}
      >Обо мне</button>
    </>
  );
}
