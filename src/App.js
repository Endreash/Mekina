import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Navbar2 from './components/NavBar2'
import PrivateRoute from './components/PrivateRoute';
import ForgotPass from './pages/ForgotPass'
import Category from './pages/Category'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateListing from './pages/CreateListing'



function App() {
  return (
    <>
    <Router>
    <Navbar2/>
    <Routes>
            <Route path="/" element={<Explore />}></Route>
            <Route path="/offers" element={<Offers />}></Route>
            <Route path="/category/:categoryName" element={<Category />}></Route>
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/forgot-pass" element={<ForgotPass />}></Route>
            <Route path="/create-listing" element={<CreateListing />}></Route>
            {/* <Route path="/*" element={<NotFound />}></Route>{" "} */}
          </Routes>
          {/* <Navbar /> */}
    </Router>
    <ToastContainer /> 
      
    </>
  );
}

export default App;
