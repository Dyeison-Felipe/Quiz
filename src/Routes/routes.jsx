import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "../Pages/Initial";
import Category from "../Pages/Category";
import Questions from "../Pages/Questions";

const RoutesApp  = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/questions" element={<Questions/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

