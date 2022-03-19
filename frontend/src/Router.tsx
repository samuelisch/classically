import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import ComposerList from "./components/composers/ComposerList";
import Home from "./components/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/composers" element={<ComposerList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router