import './App.scss';
import './Adaptive.scss'
import 'react-toastify/dist/ReactToastify.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Primushestva from './Components/Primushestva';
import Products from './Components/Products';
import callBtn from './Icons/Button.svg'
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Primushestva/>
      <Products/>
      <About/>
      <Form/>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
