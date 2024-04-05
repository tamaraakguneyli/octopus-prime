import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeaturePage from "./pages/FeaturePage/FeaturePage";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feature" element={<FeaturePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
