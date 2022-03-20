import musicCall from '../../musicCall';

const Home = () => {
  const fetchWorks = async (id: string) => {
    const data = await musicCall.getWorks(id);
    console.log(data.works);
  }

  const fetchEverything = async () => {
    const data = await musicCall.getEverything();
    console.log(data)
  }

  return (
    <>
      <h1>Testing APIs</h1>
      <button onClick={() => fetchWorks('149')}>Fetch works</button>
      <button onClick={fetchEverything}>Fetch Everything</button>
    </>
  )
}

export default Home