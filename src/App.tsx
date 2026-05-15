import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import Contact from './components/Contact';
import Home from './components/Home';
import LayoutPage from './components/LayoutPage';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='app-container'>
        <AppBar />

        {/* Main Content */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:projectId' element={<ProjectDetail />} />
          <Route path='/layout' element={<LayoutPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* Bottom components */}
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
