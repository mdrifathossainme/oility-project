
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './Components/NavMenu/NavMenu';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import Cart from './Pages/Cart/Cart';
import ContactUs from './Pages/ContactUs/Contactus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingNE from './Components/Loading/LoadingNE';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import SingleProductDatails from './Pages/Shop/SingleProductDatails';

function App() {
  return (
    <div className="App">

      <NavMenu>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop' element={
            <RequierAuth>
             <SingleProductDatails/>
            </RequierAuth>
          }></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
         <ToastContainer />
      </NavMenu>
      
    </div>
  );
}

export default App;
