import './App.css';
import HomePage from './HomePage/HomePage.jsx';
import SubmitPage from './SubmitPage/SubmitPage.jsx';
import ScoresPage from './ScoresPage/ScoresPage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import SubmitForm from './SubmitForm/SubmitForm.jsx';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />}/>
          <Route index element={<HomePage />} />
          <Route path="SubmitPage" element={<SubmitPage />} />
          <Route path="ScoresPage" element={<ScoresPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SubmitForm" element={<SubmitForm />} />
      </Routes>
    </Router>
  );
}

export default App;





