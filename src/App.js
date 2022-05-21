import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Countdown/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Shared/Footer/Footer';

import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
