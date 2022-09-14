import { LOGIN_SUCCESS, LOGOUT, TOGGLE_SETTING_LOADER } from "store/actions";

const init = {
  auth: false,
  user: null,
  token: null,
  settings: {
    loader: false,
  },
};
const reducer = (state = init, action) => {
  switch (action?.type) {
    case TOGGLE_SETTING_LOADER: {
      return {
        ...state,
        settings: {
          ...state.settings,
          loader: !state.settings.loader,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        auth: true,
        token: action?.payload?.token,
        userData: action?.payload?.userData,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
