import './App.css';
import Admin from './components/Admin';
import Barbers from './components/Barbers';
import Header from './components/Header';
import Appointments from './components/Appointments';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Appointments />} />
        <Route path="/login" element={<Admin />} />
        <Route path="/barbers" element={<Barbers />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
