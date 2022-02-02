import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation} from 'react-router-dom'
import axios from 'axios'
import LoadingBox from '../loadingBox/LoadingBox';
import MessageBox from '../messageBox/messageBox';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import { makeRequest, endpoints } from '../../api/endpoints';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const location  =  useLocation()
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
      success: successUpdate,
      error: errorUpdate,
      loading: loadingUpdate,
    } = userUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
      getData()
      return {
        currentUser
      }
    }, [location, userInfo]);



    const getData  = async() =>{
      try {
        const user  =  JSON.parse(localStorage.getItem("userInfo")).user
        // console.log(respo)
        setCurrentUser(user)
        // console.log(user)
        setName(currentUser?.name)
        setEmail(currentUser?.email)
        // const users  = await makeRequest(endpoints.referred.url, "get", {});
  
        // console.log(users)
      } catch (error) {
        
      }
    }
    const submitHandler = (e) => {
      e.preventDefault();
      // dispatch update profile
      if (password !== confirmPassword) {
        alert('Password and Confirm Password Are Not Matched');
      } else {
        dispatch(
          updateUserProfile({
            userId: user._id,
            name,
            email,
            password,
          })
        );
      }
    };
    return (
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>User Profile</h1>
          </div>
          {/* {!currentUser ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : ( */}
            {<>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile Updated Successfully
                </MessageBox>
              )}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="confirmPassword">confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label />
                <button className="primary" type="submit">
                  Update
                </button>
              </div>
            </>
          }
        </form>
      </div>
    );
  }