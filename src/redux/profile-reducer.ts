import {UserReposType, usersAPI, UsersType} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_USER_PROFILE = 'profilePage/ADD_USER_PROFILE';
const ADD_USER_REPOSITORIES = 'profilePage/ADD_USER_REPOSITORIES';
const ADD_SEARCHED_USER = 'profilePage/ADD_SEARCHED_USER';

let initialState = {
    searchedUser:"" as string,
    userProfile:null as null|UsersType,
    userRepositories:null as null|UserReposType
}
export type initialStateType = typeof initialState
const profileReducer = (state: initialStateType= initialState, action:ActionType): initialStateType => {
    switch (action.type) {
        case ADD_USER_PROFILE:
            return {
                ...state,
                userProfile:action.userProfile
            }
        case ADD_USER_REPOSITORIES:
            return {
                ...state,
                userRepositories:action.userRepositories
            }
        case ADD_SEARCHED_USER:
            return {
                ...state,
                searchedUser:action.searchText
            }
        default:
            return state;
    }
}


type ActionType=addUserProfileType | addUserRepositoriesType | addSearchedUserType

type addUserProfileType={
    type: typeof ADD_USER_PROFILE
    userProfile:UsersType
}
export const addUserProfile = (userProfile:UsersType): addUserProfileType => {
    return ({type: ADD_USER_PROFILE, userProfile})
}
type addUserRepositoriesType={
    type: typeof ADD_USER_REPOSITORIES
    userRepositories:UserReposType
}
export const addUserRepositories = (userRepositories:UserReposType): addUserRepositoriesType => {
    return ({type: ADD_USER_REPOSITORIES, userRepositories})
}
type addSearchedUserType={
    type: typeof ADD_SEARCHED_USER
    searchText:string
}
export const addSearchedUser = (searchText:string): addSearchedUserType => {
    return ({type: ADD_SEARCHED_USER, searchText})
}



type ThunkActionType=ThunkAction<Promise<void>, AppStateType, any, ActionType>
export const getUsersProfileThink = (user:string): ThunkActionType => async (dispatch) => {
    try{
        const data = await usersAPI.getUsersProfile(user)
        debugger
        dispatch(addUserProfile(data))
    }catch (e) {
        console.log("error in uploadPhotoThink" + e.message)
    }
}
export const getUsersReposThink = (user:string): ThunkActionType => async (dispatch) => {
    try{
        const data = await usersAPI.getUsersRepos(user)
        dispatch(addUserRepositories(data))
    }catch (e) {
        console.log("error in uploadPhotoThink" + e.message)
    }
}

export default profileReducer ;