import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listado from './pages/listado';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Listado />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
