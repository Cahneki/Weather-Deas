import './App.css';
import SubmitPage from './SubmitPage/SubmitPage.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
}

export default App;





