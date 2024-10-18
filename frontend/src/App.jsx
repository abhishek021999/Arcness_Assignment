import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Signup from './Page/Signup'; // Assuming this path is correct
import './App.css'; // Your CSS file

function App() {
  return (
    <>
    
      <nav>
        <Link to="/">Signup</Link>
      
      </nav>
      
      <Routes>
        <Route path='/' element={<Signup/>}/>
      </Routes>
    
    </>
  );
}

export default App;
