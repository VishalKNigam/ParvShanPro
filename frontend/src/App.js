// import { Link } from 'react-router-dom';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';
import { NavBar } from './Pages/NavBar';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <NavBar />


      <AllRoutes />
    </div>
  );
}

export default App;
