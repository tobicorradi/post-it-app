import Header from './components/Header';
import Table from './components/Table';
import Login from './components/Login';
import { BrowserRouter, Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
