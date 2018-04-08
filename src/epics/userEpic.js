import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import { FETCH_USERS, setUsers,
    DELETE_USER, deleteUserSuccess,
    ADD_USER, addUserSuccess,
    EDIT_USER, editUserSuccess }
    from '../actions/actions';

const fetchUserEpic = (action$, state$, { http }) => action$.pipe(
    ofType(FETCH_USERS),
    switchMap(() => http.get('users')),
    map(users => setUsers(users)),
);

const deleteUserEpic = (action$, state$, { http }) => action$.pipe(
    ofType(DELETE_USER),
    switchMap(async action => {
        // try {
        await http.delete(`users/${action.userId}`);
        return deleteUserSuccess(action.userId);
        // } catch (e) {
        // return usersErrors(e.data)
        // }
    }),
);

const addUserEpic = (action$, state$, { http }) => action$.pipe(
    ofType(ADD_USER),
    switchMap(async action => {
        await http.add(`users/`, action.newUser);
        return addUserSuccess(action.newUser);
    }),
);

const editUserEpic = (action$, state$, { http }) => action$.pipe(
    ofType(EDIT_USER),
    switchMap(async action => {
        await http.edit(`users/${action.changedUser.id}`, action.changedUser);
        return editUserSuccess(action.changedUser);
    })
);


export const userEpic = combineEpics(
    fetchUserEpic,
    deleteUserEpic,
    addUserEpic,
    editUserEpic
);