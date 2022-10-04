import './App.css';
import Header from './component/Header'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <>
   <ToastContainer/>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
    </Routes>
   </>
  );
}

export default App;
