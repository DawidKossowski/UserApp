export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const SET_USERS = 'SET_USERS';
export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (userId) => ({
    type: DELETE_USER,
    userId,
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    userId,
});

export const ADD_USER = 'ADD_USER';
export const addUser = (newUser) => ({
    type: ADD_USER,
    newUser,
});

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = (newUser) => ({
    type: ADD_USER_SUCCESS,
    newUser,
});

export const EDIT_USER = 'EDIT_USER';
export const editUser = (changedUser) => ({
    type: EDIT_USER,
    changedUser
});

export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const editUserSuccess = (changedUser) => ({
    type: EDIT_USER_SUCCESS,
    changedUser
});
