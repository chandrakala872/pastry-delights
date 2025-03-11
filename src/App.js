// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProductMoreDetails from './Components/ProductMoreDetails';

import Home from './Components/Home';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Aboutus from './Components/Aboutus';
 import Register from './Components/Register';
  // import Logout from './Components/TopLogout'





import TopNavbar from './Components/TopNavbar';
import ProductDetails from './Components/ProductDetails';
// import Carousel from './Components/Carousel'





function App() {

  return (
    <div>



      <BrowserRouter>

        <TopNavbar />
        {/* <Carousel />   */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />  
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
           {/* <Route path="/logout" element={<Logout />} />  */}
         
        
          
           <Route path="/productdetails" element={<ProductDetails />} />




        </Routes>
      </ BrowserRouter >





    </div>
  );
}


export default App;
