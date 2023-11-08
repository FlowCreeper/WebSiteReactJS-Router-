import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Lucas from "./Lucas";
import Igor from "./Igor";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lucas" element={<Lucas />} />
          <Route path="igor" element={<Igor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
