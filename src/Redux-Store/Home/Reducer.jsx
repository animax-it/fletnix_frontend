import {
  CATEGORY,
  EMAIL,
  ENDCATEGORY,
  ERROR,
  GETUserDATA,
  Get_MOVIES,
  Get_TVSHOWS,
  LOADING,
  MAINITEM,
  PASSWORD,
  SEARCH,
  SEARCHDATA,
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  USERLOGIN,
  USERLOGOUT,
  AGE,
} from "./ActionTypes";

const getValue = (key) => {
  try {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (e) {
    return e.message;
  }
};
const init = {
  loading: false,
  error: false,
  signin_loading: false,
  signin_error: false,
  tv_shows: [],
  movies: [],
  email: "",
  password: "",
  age: "",
  userData: [],
  auth: {
    isUserLoggedIn: getValue("token") ? true : false,
    token: getValue("token"),
  },
  mainItem: "",
  categoryItem: "",
  endCategoryItem: "",
  search_item: "",
  searchData: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SIGNIN_LOADING:
      return {
        ...state,
        signin_loading: payload,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signin_error: payload,
      };
    case Get_TVSHOWS:
      return {
        ...state,
        loading: false,
        tv_shows: payload,
      };
    case Get_MOVIES:
      return {
        ...state,
        loading: false,
        movies: payload,
      };
    case EMAIL:
      return {
        ...state,
        loading: false,
        email: payload,
      };
    case PASSWORD:
      return {
        ...state,
        loading: false,
        password: payload,
      };
    case AGE:
      return {
        ...state,
        loading: false,
        age: payload,
      };
    case GETUserDATA:
      return {
        ...state,
        loading: false,
        userData: payload,
      };
    case USERLOGIN:
      return {
        ...state,
        auth: {
          ...state.auth,
          isUserLoggedIn: true,
          token: payload,
        },
      };
    case USERLOGOUT:
      return {
        ...init,
      };
    case MAINITEM:
      return {
        ...state,
        loading: false,
        mainItem: payload,
      };
    case CATEGORY:
      return {
        ...state,
        categoryItem: payload,
      };
    case ENDCATEGORY:
      return {
        ...state,
        endCategoryItem: payload,
      };
    case SEARCH:
      return {
        ...state,
        loading: false,
        search_item: payload,
      };
    case SEARCHDATA:
      return {
        ...state,
        loading: false,
        searchData: payload,
      };
    default:
      return state;
  }
};
