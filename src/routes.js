import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageDefaultTemplate from './components/PageDefaultTemplate/PageDefaultTemplate';
import AddPirate from './pages/AddPirate';
import AddCrew from './pages/AddCrew';

function AppRoutes() {
  return (
    <BrowserRouter>      
          <Routes>
            <Route path='/' element={<PageDefaultTemplate />} >
              <Route index element={<Home />} />
              <Route path='pirate/add' element={<AddPirate />} />
              <Route path='crew/add' element={<AddCrew />} />
            </Route>
          </Routes>        
    </BrowserRouter>
  );
}

export default AppRoutes;
