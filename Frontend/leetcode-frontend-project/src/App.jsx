import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Loginout from './modules/auth';
import Problem from './modules/problem';
import Problems from './modules/problems';
import './App.css'
import Navbar from './modules/Explore';
import Create from './modules/create';

  




function App() {
 
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/Explore" element={<Navbar />}/>
            <Route path="auth" element={<Loginout />}/>
            <Route path="problems/:pid" element={<Problem />}/>
            <Route path="/problems/all" element={<Problems />}/>
            <Route path="/problems/create" element={<Create />}/>
        </Routes>
  </BrowserRouter>
  )
}


export default App
