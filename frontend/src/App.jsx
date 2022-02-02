import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserWelcome from "./pages/Welcome";
import Slide from "./pages";
import UserSignup from "./pages/SignUp";
import Profit from "./pages/Profit";
import UserSimple from "./pages/Simple";
import Login from "./pages/Login";
import UserForgot from "./pages/Forgot";
import UserVerification from "./pages/Verification";
import UserInvite from "./pages/Invite";
import UserCongrats from "./pages/UserCongrats";
import UserFailed from "./pages/Failed";
import UserError from "./pages/Error";
import UserWork from "./pages/Work";
import UserHooray from "./pages/Hooray";
import Pix from "./components/pix/Pix";
import UserContact from "./pages/Contact";
import UserDesktop from "./pages/Home";
import UserDashboard from "./pages/Dashboard";
import UserTable from "./pages/Table";
// import Friend from "./pages/Friend";
import SideBar from "./pages/SideBar";
import PopOut from "./pages/PopOut";
import Policy from "./pages/Policy";
import ProfileScreen from "./components/profileScreen/profile";
import PrivateRoute from "./components/private/Private";
import GuestRoute from "./components/private/Guest";

/**
 * 
 * @returns  <PrivateRoute
                path="/add-new-fund"
                
                component={AddNewFundPage}
              />
 */

// import popup from './pages/Pop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserWelcome} />
        <Route exact path="/profit" component={Profit} />
        <Route exact path="/simple" component={UserSimple} />
        <Route exact path="/Slide" component={Slide} />
        <GuestRoute exact path="/signup" component={UserSignup} />
        <GuestRoute exact path="/Login" component={Login} />
        <Route exact path="/forgot" component={UserForgot} />
        <Route exact path="/verification" component={UserVerification} />
        <Route exact path="/invite" component={UserInvite} />
        <Route exact path="/congrats" component={UserCongrats} />
        <Route exact path="/failed" component={UserFailed} />
        <Route exact path="/error" component={UserError} />
        <Route exact path="/work" component={UserWork} />
        <Route exact path="/hooray" component={UserHooray} />
        <Route exact path="/pix" component={Pix} />
        <Route exact path="/contact" component={UserContact} />
        <Route exact path="/desktop" component={UserDesktop} />
        <PrivateRoute exact path="/dashboard" component={UserDashboard} />
        <PrivateRoute exact path="/table" component={UserTable} />
        <Route exact path="/SideBar" component={SideBar} />
        <Route exact path="/PopOut" component={PopOut} />
        <Route exact path="/terms" component={Policy} />
        {/* <Route path="/popup" component={popup} /> */}
        {/* <PrivateRoute exact path="/Friend" component={Friend} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
