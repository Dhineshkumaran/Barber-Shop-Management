import './App.css';
import Admin from './components/Admin';
import Barbers from './components/Barbers';
import Header from './components/Header';
import Appointments from './components/Appointments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/barbers" element={<Barbers />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
