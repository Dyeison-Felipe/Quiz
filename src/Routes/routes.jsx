import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "../Pages/Initial";
import Category from "../Pages/Category";
import Questions from "../Pages/Questions";
import End from "../Pages/End";

const RoutesApp  = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

