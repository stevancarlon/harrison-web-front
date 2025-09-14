import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InitialPageScreen, SignInScreen, SignUpScreen } from './screens';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPageScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
