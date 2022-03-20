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

  const fetchOmni = async(id: string) => {
    const data = await musicCall.getWorks(id);
    console.log(data.works);
  }

  return (
    <>
      <h1>Testing APIs</h1>
      <button onClick={fetchPopularComposers}>Fetch popular composers</button>
      <button onClick={() => fetchComposer("moza")}>Fetch Mozart</button>
      <button onClick={() => fetchOmni('2')}>Fetch works</button>
    </>
  )
}

export default Home