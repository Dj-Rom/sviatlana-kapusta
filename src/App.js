import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about_page/AboutPage';
import MainPage from './components/main_page/MainPage';
import Navi from './components/navi/Navi';
import ResumePage from './components/resume_page/ResumePage';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className="container">
        <Routes>
          <Route path="sviatlana-kapusta/build/" element={<MainPage />} />
          <Route
            path="sviatlana-kapusta/build/about-me"
            element={<AboutPage />}
          />
          <Route
            path="sviatlana-kapusta/build/resume"
            element={<ResumePage />}
          />
          <Route path="*" element={<p>ERROR: Page not found!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
