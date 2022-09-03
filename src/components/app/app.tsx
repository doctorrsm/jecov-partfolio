import React, {useEffect} from 'react';
import Layout from '../layout/layout';
import {useDispatch} from 'react-redux';
import {fetchData} from '../../store/data.api';
import {useAppSelector} from '../../store/hooks';

function App(): JSX.Element {
    const dispatch = useDispatch();
    const status = useAppSelector((state) => state.data.dataStatus)
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchData());

    })
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
