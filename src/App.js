import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Resume from './pages/resume';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:gitUserName" element={<Resume />} />
        </Routes>
      </Router>
      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        theme="light"
        autoClose={5000}
        pauseOnFocusLoss
        newestOnTop={false}
        position="top-right"
        hideProgressBar={false}
      />
    </div>
  );
};

export default App;
