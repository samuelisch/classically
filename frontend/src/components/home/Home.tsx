import musicCall from '../../musicCall';

const Home = () => {
  const fetchPopularComposers = async () => {
    const data = await musicCall.getPopularComposers();
    console.log(data.composers);
  };

  const fetchComposer = async (name: string) => {
    const data = await musicCall.getComposer(name);
    console.log(data.composers);
  };

  return (
    <>
      <h1>Testing APIs</h1>
      <button onClick={fetchPopularComposers}>Fetch popular composers</button>
      <button onClick={() => fetchComposer("schu")}>Fetch Mozart</button>
    </>
  )
}

export default Home