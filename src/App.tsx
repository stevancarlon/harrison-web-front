import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  InitialPageScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  MyFeedbacksListScreen,
  MyFeedbacksScreen,
  SendFeedbackScreen,
} from './screens';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPageScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/my-feedbacks" element={<MyFeedbacksScreen />} />
        <Route path="/my-feedbacks-list" element={<MyFeedbacksListScreen />} />
        <Route path="/send-feedback" element={<SendFeedbackScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
