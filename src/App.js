import './App.scss';
import About from './Components/About';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Primushestva from './Components/Primushestva';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Primushestva/>
      <Products/>
      <Products/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
