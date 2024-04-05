import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeaturePage from "./pages/FeaturePage/FeaturePage";
import "./App.scss";
import Loader from "./components/Loader/Loader";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feature" element={<FeaturePage/>}/>
        <Route path="/loading" element={<Loader/>}/>
    </Routes>
    </BrowserRouter>
  );
}
