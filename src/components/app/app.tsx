import React, {useEffect} from 'react';
import Layout from '../layout/layout';
import {useDispatch} from 'react-redux';
import {fetchData} from '../../store/data.api';
import {useAppSelector} from '../../store/hooks';
import AnimatedCursor from "react-animated-cursor"

function App(): JSX.Element {
    const dispatch = useDispatch();
    const status = useAppSelector((state) => state.data.dataStatus)
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchData());

    })
  return (
    <>
      {/*<AnimatedCursor*/}
      {/*    color="51, 51, 51"*/}
      {/*    innerSize={8}*/}
      {/*    outerSize={35}*/}
      {/*    innerScale={1}*/}
      {/*    outerScale={1.7}*/}
      {/*    outerAlpha={0.5}*/}
      {/*    outerStyle={{*/}
      {/*        border: '3px solid #333'*/}
      {/*    }}*/}
      {/*/>*/}
      <Layout />
    </>
  );
}

export default App;
