import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Review from './Components/Review/Review';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Review></Review>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
