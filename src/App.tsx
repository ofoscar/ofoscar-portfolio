import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import Contact from './components/Contact';
import Home from './components/Home';
import LayoutPage from './components/LayoutPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';
import Videos from './components/Videos';
import ScrollToTop from './components/ScrollToTop';

function MainLayout() {
  return (
    <div className='app-container'>
      <AppBar />
      <Outlet />
      <BottomBar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:projectId' element={<ProjectDetail />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/layout' element={<LayoutPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
