import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/Main";
import Home from "./components/home/Home";
import Timeline from "./components/timeline/Timeline";
import PopularList from "./components/popular/PopularList";
import ComposerPage from "./components/composerDetails/ComposerPage";
import WorkPage from "./components/works/WorkPage";
import Search from "./components/search/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/composer/:composerId" element={<ComposerPage />} />
          <Route path="/composer/:composerId/:workId" element={<WorkPage />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
