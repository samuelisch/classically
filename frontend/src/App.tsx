import React, { useEffect } from "react";
import ComposerList from "./components/Composers/ComposerList";
import musicCall from "./musicCall";
import { fetchAllComposers } from "./reducers/composersSlice";
import { useAppDispatch } from "./reducers/hooks";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
    background: rgb(240, 240, 240);
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("loading composers ...");
    dispatch(fetchAllComposers());
  }, []);

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
      <GlobalStyle />
      <div className="App">
        <h1>Testing APIs</h1>
        <button onClick={() => dispatch(fetchAllComposers())}>
          Fetch all composers
        </button>
        <button onClick={fetchPopularComposers}>Fetch popular composers</button>
        <button onClick={() => fetchComposer("schu")}>Fetch Mozart</button>
        <ComposerList />
      </div>
    </>
  );
};

export default App;
