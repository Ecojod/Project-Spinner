import './App.css';
import "./index.js"
import Spinner from './components/Spinner';
import SpinnerSecond from './components/SpinnerSecond';
import SpinnerThird from './components/SpinnerThird';
import LearnMoreButton from './components/LearnMoreButton';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Rotating3DimgCube from './components/Rotating3DimgCube';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/spinner-first" element={<Spinner />}></Route>
          <Route path="/spinner-second" element={<SpinnerSecond />}></Route>
          <Route path="/spinner-third" element={<SpinnerThird />}></Route>
          <Route path="/learnmore-button" element={<LearnMoreButton />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/3d-cube" element={<Rotating3DimgCube />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
