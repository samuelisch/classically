import musicCall from '../../apiCalls/musicCall';

const Home = () => {
  const fetchWorks = async (id: string) => {
    const data = await musicCall.getWorksFromComposerId(id);
    console.log(data.works);
  }

  const fetchEverything = async () => {
    const data = await musicCall.getEverything();
    console.log(data)
  }

  const searchSomething = async () => {
    const data = await musicCall.searchMusic('bach');
    console.log(data.results)
  }

  return (
    <>
      <h1>Testing APIs</h1>
      <button onClick={() => fetchWorks('149')}>Fetch works</button>
      <button onClick={fetchEverything}>Fetch Everything</button>
      <button onClick={searchSomething}>Search</button>
    </>
  )
}

export default Home