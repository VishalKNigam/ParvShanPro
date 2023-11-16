import { Link } from 'react-router-dom';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';
import { NavBar } from './Pages/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      &nbsp;

      <AllRoutes />
    </div>
  );
}

export default App;
