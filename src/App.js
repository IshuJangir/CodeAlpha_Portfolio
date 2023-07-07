import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
   <div className=''>
     <Navbar></Navbar>

     <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/skills' Component={Skills}></Route>
          <Route path='/project' Component={Project}></Route>
          <Route path='/contact' Component={Contact}></Route>
     </Routes>

     <Footer></Footer>
   </div>
  );
}

export default App;
