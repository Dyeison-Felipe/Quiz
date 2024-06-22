import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "../Pages/Initial";

const RoutesApp  = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

