import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumeReader from './pages/ResumeReader';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Onboarding from './pages/Onboarding';
import UploadResume from './pages/UploadResume';
import ScoreReport from './pages/ScoreReport';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/upload" element={<UploadResume />} />
          <Route path="/score" element={<ScoreReport />} />
          <Route path="/resume" element={<ResumeReader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;