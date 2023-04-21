import style from './App.module.css'
import Navbar from './Component/Navbar/Navbar';
import Cards from './Component/Navbar/Card/Card';
import Ride from './Component/Ride/Ride';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className={style.card}>   <Cards/></div>
  <Ride/>
  <Footer/>
    </div>
  );
}

export default App;
