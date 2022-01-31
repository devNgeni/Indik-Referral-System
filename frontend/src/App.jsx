import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import UserWelcome from './pages/Welcome';
import Slide from './pages';
import UserSignup from './pages/SignUp';
import Profit from './pages/Profit';
import UserSimple from './pages/Simple';
import Login from './pages/Login';
import UserForgot from './pages/Forgot';
import UserVerification from './pages/Verification';
import UserInvite from './pages/Invite';
import UserCongrats from './pages/UserCongrats';
import UserFailed from './pages/Failed';
import UserError from './pages/Error';
import UserWork from './pages/Work';
import UserHooray from './pages/Hooray';
import Pix from './components/pix/Pix';
import UserContact from './pages/Contact';
import UserDesktop from './pages/Home';
import UserDashboard from './pages/Dashboard';
import UserTable from './pages/Table';
import Friend from './pages/Friend'
import SideBar from './pages/SideBar';
import PopOut from './pages/PopOut';
import Policy from './pages/Policy';
import ProfileScreen from './components/profileScreen/profile';

// import popup from './pages/Pop';

function App() {
 

  return (
      <Routes>
      <Route path="/" element={<UserWelcome />} />
      <Route path="/profit" element={<Profit />} />
      <Route path="/simple" element={<UserSimple />} />
      <Route path="/Slide" element={<Slide />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<UserForgot />} />
      <Route path="/verification" element={<UserVerification />} />
      <Route path="/invite" element={<UserInvite />} /> 
      <Route path="/congrats" element={<UserCongrats />} />
      <Route path="/failed" element={<UserFailed />} />
      <Route path="/error" element={<UserError />} />
      <Route path="/work" element={<UserWork />} />
      <Route path="/hooray" element={<UserHooray />} />
      <Route path="/pix" element={<Pix />} />
      <Route path="/contact" element={<UserContact />} />
      <Route path="/desktop" element={<UserDesktop />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/table" element={<UserTable />} />
      <Route path="/Friend" element={<Friend />} />
      <Route path="/SideBar" element={<SideBar />} />
      <Route path="/PopOut"  element={<PopOut />} />
      <Route path="/terms"  element={<Policy />} />
      <Route path="/profileScreen"  element={<profile />} />




      {/* <Route path="/popup" element={popup} /> */}
      </Routes>
  );
}

export default App;
