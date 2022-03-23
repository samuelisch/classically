import musicCall from '../../apiCalls/musicCall';

const Home = () => {
  const fetchWorks = async (id: string) => {
    const data = await musicCall.getWorksFromComposerId(id);
    console.log(data.works);
  }

  const searchSomething = async () => {
    const data = await musicCall.searchMusic('bach');
    console.log(data.results)
  }

  return (
    <>
      <h1>Testing APIs</h1>
      <button onClick={() => fetchWorks('149')}>Fetch works</button>
      <button onClick={searchSomething}>Search</button>
    </>
  )
}

export default Home