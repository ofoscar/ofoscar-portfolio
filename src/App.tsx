import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <AppBar />

        {/* Main Content */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
