export const SET_ACCESS_TOKEN ="TOKEN::SET_ACCESS_TOKEN"
export const SET_REFRESH_TOKEN ="TOKEN:: SET_REFRESH_TOKEN"

export const setAccessToken = (access_token) => ({
  type: SET_ACCESS_TOKEN,
  payload: access_token,
});

export const setRefreshToken = (refresh_token) => ({
  type: SET_REFRESH_TOKEN,
  payload: refresh_token,
});