import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './Pages/DoctorsRoute/Doctors/Doctors';
import Homepage from './Pages/Home/Homepage/Homepage';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Services from './Pages/ServicesRoute/Services/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="serviceDetail/:id" element={<ServiceDetail />}></Route>
        <Route path="servicePage" element={<Services />}></Route>
        <Route path="doctorPage" element={<Doctors />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
