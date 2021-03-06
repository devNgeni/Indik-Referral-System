import Axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_ACTIVATE_FAIL,
  USER_ACTIVATE_REQUEST,
  USER_ACTIVATE_RESEND,
  USER_ACTIVATE_SUCCESS,
} from "../constants/userConstants";
import { endpoints } from "../api/endpoints";
export const Register =
  (name, email, phone, password, confirmPassword) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: {
        email,
        phone,
        password,
        confirmPassword,
      },
    });
    try {
      const { data } = await Axios.post(endpoints.signup.url, {
        name,
        email,
        phone,
        password,
        confirmPassword,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const activate = (code) => async (dispatch) => {
  dispatch({
    type: USER_ACTIVATE_REQUEST,
    payload: {
      code,
    },
  });
  try {
    const { data } = await Axios.patch(endpoints.activate.url, {
      code,
    });

    if (data.success && data.message.situacao !== "ERRO") {
      dispatch({
        type: USER_ACTIVATE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }else  {
      alert(data.message.descricao);
    }
  } catch (error) {
    dispatch({
      type: USER_ACTIVATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const reSend = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_ACTIVATE_RESEND,
  });
  document.location.href = "/signup";
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await Axios.post(endpoints.signin.url, {
      email,
      password,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
    console.log(localStorage.getItem("userInfo"));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_SIGNOUT,
  });
  document.location.href = "/signin";
};
export const detailsUser = (user_id) => async (dispatch, getState) => {
  dispatch({
    type: USER_DETAILS_REQUEST,
    payload: user_id,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(endpoints.signin.url, {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    });
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = (user_Id) => async (dispatch, getState) => {
  dispatch({
    type: USER_UPDATE_PROFILE_REQUEST,
    payload: user_Id,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(endpoints.profile.url, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user_Id) => async (dispatch, getState) => {
  dispatch({
    type: USER_UPDATE_PROFILE_REQUEST,
    payload: user_Id,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(endpoints.referred.url / `${user_Id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(endpoints.referred.url, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (user_Id) => async (dispatch, getState) => {
  dispatch({
    type: USER_DELETE_REQUEST,
    payload: user_Id,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/users/${user_Id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};
