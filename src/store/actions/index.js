import { useFetch } from "../../utilities/usefetch";
// Constant
export const LOGIN_SUCCESS = "LOGIN SUCCESS [LOGIN]";
export const LOGOUT = "LOGOUT [LOGIN]";
export const TOGGLE_SETTING_LOADER = "TOGGLE SETTING LOADER [APP][SETTING]";
// Actions
export const handleLogin = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
  localStorage.setItem("token", JSON.stringify(data.token));
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const handleLoginSuccess = (payload) => {
  return async (dispatch) => {
    try {
      const res = await useFetch.post("auth/login", payload);
      const { data } = res;
      return dispatch(handleLogin(data));
    } catch (e) {
      throw new Error(e?.message);
    }
  };
};

export const refreshToken = () => {
  return async (dispatch) => {
    dispatch(toggleSettingLoader());
    try {
      const res = await useFetch.get("auth");
      const { data } = res;
      dispatch(handleLogin(data?.data));
      return dispatch(toggleSettingLoader());
    } catch (e) {
      dispatch(toggleSettingLoader());
      return dispatch(handleLogout());
    }
  };
};
// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  };
};
// Toggler Setting Loader
export const toggleSettingLoader = () => {
  return {
    type: TOGGLE_SETTING_LOADER,
  };
};
