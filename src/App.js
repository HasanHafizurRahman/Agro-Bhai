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
import ToolDetail from './Components/ToolDetails/ToolDetail';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Portfolio from './Components/Portfolio/Portfolio';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Review></Review>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/tool/:toolId' element={<ToolDetail></ToolDetail>}></Route>
       <Route path='/checkout' element={
       <RequireAuth>
        <Checkout></Checkout>
       </RequireAuth>
      }></Route>
       <Route path='/addservice' element={
       <RequireAuth>
        <AddService></AddService>
       </RequireAuth>
      }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
