import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import Contact from './components/Contact';
import CookiesPopup from './components/CookiesPopup';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <AppBar />

        {/* Main Content */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:projectId' element={<ProjectDetail />} />
        </Routes>

        {/* Bottom components */}
        <BottomBar />
        <CookiesPopup />
      </div>
    </Router>
  );
}

export default App;
