const defaultState = {
  users: [],
};

export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export const setUsersCreator = (payload) => ({ type: SET_USERS, payload });

export const fetchUsersCreator = () => ({ type: FETCH_USERS });
