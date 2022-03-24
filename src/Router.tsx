import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/Main";
// import Home from "./components/home/Home";
import Timeline from "./components/timeline/Timeline";
import PopularList from "./components/popular/PopularList";
import ComposerPage from "./components/composerDetails/ComposerPage";
import WorkPage from "./components/works/WorkPage";
import Search from "./components/search/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/classically" element={<Main />}>
          <Route index element={<PopularList />} />
          <Route path="/classically/timeline" element={<Timeline />} />
          <Route path="/classically/popular" element={<PopularList />} />
          <Route path="/classically/composer/:composerId" element={<ComposerPage />} />
          <Route path="/classically/composer/:composerId/:workId" element={<WorkPage />} />
          <Route path="/classically/search" element={<Search />} />
        </Route>
        <Route path="*" element={<Navigate to="/classically" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router