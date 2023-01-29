import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import AllOrders from './Pages/Dashboard/AllOrders';
import Dhashboard from './Pages/Dashboard/Dhashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Profile from './Pages/Dashboard/Profile';
import Reviews from './Pages/Dashboard/Reviews';
import Headers from './Pages/Home/Headers';
import Home from './Pages/Home/Home';
import RequiredAuth from './Pages/RequiredAuth';
import Inventory from './Pages/Shared/Inventory';
import NotFound from './Pages/Shared/NotFound';
import Shop from './Pages/Shop/Shop';
import SignIn from './Pages/SignLog/SignIn';
import SignUp from './Pages/SignLog/SignUp';
 
import Blog from './Pages/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import CoustomerReviews from './Pages/Dashboard/CoustomerReviews';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import AllProducts from './Pages/Home/AllProducts';
 
import ManageProducts from './Pages/Dashboard/ManageProducts';
 
 
 

function App() {
 
  return (
    <div className="">
      <Headers></Headers>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
      
        {/* <Route path='/homeInventory/:id' element={
          <RequiredAuth>
            <HomeInventory></HomeInventory>
          </RequiredAuth>
        }></Route> */}
        <Route path='/inventory/:id' element={
        <RequiredAuth>
          <Inventory></Inventory>
        </RequiredAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/booking' element={<Orders></Orders>}></Route> */}
        <Route path='/reviews' element={<CoustomerReviews></CoustomerReviews>}></Route>
        <Route path='/shop' element={
          <RequiredAuth>
            <Shop></Shop>
          </RequiredAuth>
        }></Route>
      
        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dhashboard></Dhashboard>
          </RequiredAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          {/* <Route path='profile' element={<Profile></Profile>}></Route> */}
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='allproduct' element={<AllProducts></AllProducts>}></Route>

          <Route path='allOrder' element={<AllOrders></AllOrders>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp ></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;