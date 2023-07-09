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
export const get_loading = () => {
  return {
    type: LOADING,
  };
};
export const get_error = () => {
  return {
    type: ERROR,
  };
};
export const get_signin_loading = (data) => {
  return {
    type: SIGNIN_LOADING,
    payload: data,
  };
};
export const get_signin_error = (data) => {
  return {
    type: SIGNIN_ERROR,
    payload: data,
  };
};

export const get_tvshows = (data) => {
  return {
    type: Get_TVSHOWS,
    payload: data,
  };
};
export const get_movies = (data) => {
  return {
    type: Get_MOVIES,
    payload: data,
  };
};

export const get_email = (email) => {
  return {
    type: EMAIL,
    payload: email,
  };
};
export const get_password = (password) => {
  return {
    type: PASSWORD,
    payload: password,
  };
};
export const get_age = (age) => {
  return {
    type: AGE,
    payload: age,
  };
};
export const get_userData = (data) => {
  return {
    type: GETUserDATA,
    payload: data,
  };
};
export const userlogin = (data) => {
  return {
    type: USERLOGIN,
    payload: data,
  };
};
export const userlogout = (data) => {
  return {
    type: USERLOGOUT,
    payload: data,
  };
};
export const main_item = (data) => {
  return {
    type: MAINITEM,
    payload: data,
  };
};
export const category_item = (data) => {
  return {
    type: CATEGORY,
    payload: data,
  };
};
export const end_category_item = (data) => {
  return {
    type: ENDCATEGORY,
    payload: data,
  };
};
export const search = (data) => {
  return {
    type: SEARCH,
    payload: data,
  };
};
export const search_data = (data) => {
  return {
    type: SEARCHDATA,
    payload: data,
  };
};
