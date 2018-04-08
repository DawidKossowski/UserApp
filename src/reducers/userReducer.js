import {SET_USERS, DELETE_USER_SUCCESS, ADD_USER_SUCCESS, EDIT_USER_SUCCESS} from '../actions/actions'

export function userReducer(state = [], action) {
    switch (action.type) {
        case SET_USERS:
            return action.users;
        case DELETE_USER_SUCCESS:
             return state.filter(user => user.id !== action.userId);
        case ADD_USER_SUCCESS:
            return state.concat(action.newUser);
        case EDIT_USER_SUCCESS:
            return state.map(user => user.id === action.changedUser.id ? action.changedUser : user );

        default:
            return state;
    }
}
