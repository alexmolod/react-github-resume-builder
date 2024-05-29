import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Resume from './pages/resume';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:gitUserName" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
