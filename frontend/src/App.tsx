import React, { useEffect, useState } from 'react';
import ComposerList from './components/Composers/ComposerList';
import musicCall from './musicCall'
import { fetchAllComposers } from './reducers/composersSlice';
import { useAppSelector, useAppDispatch } from './reducers/hooks';

function App() {
  const {composerList, status} = useAppSelector(state => state.composers);
  const [loaded, setLoaded] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('loading composers ...');
    dispatch(fetchAllComposers())
  }, [])

  useEffect(() => {
    if (status === 'idle') {
      setLoaded(true)
    }
  }, [status])

  const fetchPopularComposers = async () => {
    const data = await musicCall.getPopularComposers();
    console.log(data.composers)
  }

  const fetchComposer = async (name:string) => {
    const data = await musicCall.getComposer(name);
    return data.composers
  }

  return (
    <div className="App">
      <h1>Testing APIs</h1>
      <button onClick={() => dispatch(fetchAllComposers())}>Fetch all composers</button>
      <button onClick={fetchPopularComposers}>Fetch popular composers</button>
      <button onClick={() => fetchComposer('schu')}>Fetch Mozart</button>
      {loaded &&
        <ComposerList composers={composerList} />
      }
    </div>
  );
}

export default App;
