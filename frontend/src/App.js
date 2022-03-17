import React from 'react'
import serverCall from './server';

const App = () => {
  const fetchPopularComposers = async () => {
    const data = await serverCall.getPopularComposers();
    console.log(data.composers)
  }

  const fetchAllComposers = async () => {
    const data = await serverCall.getAllComposers();
    console.log(data.composers);
  }

  const fetchComposer = async (name) => {
    const data = await serverCall.getComposer(name);
    console.log(data.composers)
  }

  return (
    <div className="App">
      <h1>Testing API calls</h1>
      <button onClick={fetchAllComposers}>Fetch all composers</button>
      <button onClick={fetchPopularComposers}>Fetch popular composers</button>
      <button onClick={() => fetchComposer('schu')}>Fetch Mozart</button>
    </div>
  );
}

export default App;
