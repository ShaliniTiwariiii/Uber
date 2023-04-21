import style from './App.module.css'
import Navbar from './Component/Navbar/Navbar';
import Cards from './Component/Navbar/Card/Card';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className={style.card}>   <Cards/></div>
  
    </div>
  );
}

export default App;
