import './App.css';
import HomePage from './HomePage/HomePage.jsx';
import SubmitPage from './SubmitPage/SubmitPage.jsx';
import ScoresPage from './ScoresPage/ScoresPage.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />}/>
          <Route index element={<HomePage />} />
          <Route path="SubmitPage" element={<SubmitPage />} />
          <Route path="ScoresPage" element={<ScoresPage />} />
      </Routes>
    </Router>
  );
}

export default App;





