import React from 'react';
import musicCall from './musicCall'

function App() {
  const fetchPopularComposers = async () => {
    const data = await musicCall.getPopularComposers();
    console.log(data.composers)
  }

  const fetchAllComposers = async () => {
    const data = await musicCall.getAllComposers();
    console.log(data.composers);
  }

  const fetchComposer = async (name:string) => {
    const data = await musicCall.getComposer(name);
    console.log(data.composers)
  }

  return (
    <div className="App">
      <h1>Testing APIs</h1>
      <button onClick={fetchAllComposers}>Fetch all composers</button>
      <button onClick={fetchPopularComposers}>Fetch popular composers</button>
      <button onClick={() => fetchComposer('schu')}>Fetch Mozart</button>
    </div>
  );
}

export default App;
