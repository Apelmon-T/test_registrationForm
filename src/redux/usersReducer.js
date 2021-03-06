const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_POSITIONS = "SET-POSITIONS";

const initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  positions: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_POSITIONS:
      return {
        ...state,
        positions: action.positions,
      };

    default:
      return state;
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setPositions = (positions) => {
  return {
    type: SET_POSITIONS,
    positions,
  };
};

export default usersReducer;
