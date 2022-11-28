import Header from './component/Header'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer'
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import Cover from './component/Cover';

function App() {
  return (
   <>
   <ToastContainer/>
    <Header/>
    <Cover/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
