import {
    GET_AVATAR,
    GET_AVATAR_SUCCESS,
    GET_AVATAR_FAILURE,
    POST_AVATAR,
    POST_AVATAR_SUCCESS,
    POST_AVATAR_FAILURE,
  } from "../actionTypes";
  
  export const getAvatar = () => ({
    type: GET_AVATAR,
  });
  
  export const getAvatarSuccess = (data) => ({
    type: GET_AVATAR_SUCCESS,
    payload: data,
  });
  
  export const getAvatarFailure = () => ({
    type: GET_AVATAR_FAILURE,
  });
  
  
  export const postAvatar = (item, callback) => ({
    type: POST_AVATAR,
    payload: item,
    callback,
  });
  
  export const postAvatarSuccess = (data) => ({
    type: POST_AVATAR_SUCCESS,
    payload: data,
  });
  
  export const postAvatarFailure = () => ({
    type: POST_AVATAR_FAILURE,
  });
  