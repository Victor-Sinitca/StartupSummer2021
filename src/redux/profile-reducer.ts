import {UserReposType, usersAPI, UsersType} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_USER_PROFILE = 'profilePage/ADD_USER_PROFILE';
const ADD_USER_REPOSITORIES = 'profilePage/ADD_USER_REPOSITORIES';
const ADD_SEARCHED_USER = 'profilePage/ADD_SEARCHED_USER';
const SET_PAGE_NUMBER = 'profilePage/SET_PAGE_NUMBER';
const SET_INIT_REPOSITORY = 'profilePage/SET_INIT_REPOSITORY';

let initialState = {
    searchedUser: "" as string,
    userProfile: null as null | UsersType,
    userRepositories: null as null | UserReposType,
    pageNumber:1 as number,
    initRepository:false as boolean
}
export type initialStateType = typeof initialState
const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case ADD_USER_REPOSITORIES:
            return {
                ...state,
                userRepositories: action.userRepositories
            }
        case ADD_SEARCHED_USER:
            return {
                ...state,
                searchedUser: action.searchText
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.Number
            }
        case SET_INIT_REPOSITORY:
            return {
                ...state,
                initRepository: action.initValue
            }
        default:
            return state;
    }
}


type ActionType = addUserProfileType | addUserRepositoriesType | addSearchedUserType | setPageNumberType |
    setInitRepositoryType

type addUserProfileType = {
    type: typeof ADD_USER_PROFILE
    userProfile: UsersType | null
}
export const addUserProfile = (userProfile: UsersType | null): addUserProfileType => {
    return ({type: ADD_USER_PROFILE, userProfile})
}
type addUserRepositoriesType = {
    type: typeof ADD_USER_REPOSITORIES
    userRepositories: UserReposType | null
}
export const addUserRepositories = (userRepositories: UserReposType | null): addUserRepositoriesType => {
    return ({type: ADD_USER_REPOSITORIES, userRepositories})
}
type addSearchedUserType = {
    type: typeof ADD_SEARCHED_USER
    searchText: string
}
export const addSearchedUser = (searchText: string): addSearchedUserType => {
    return ({type: ADD_SEARCHED_USER, searchText})
}
type setPageNumberType = {
    type: typeof SET_PAGE_NUMBER
    Number: number
}
export const setPageNumber = (Number: number): setPageNumberType => {
    return ({type: SET_PAGE_NUMBER, Number})
}
type setInitRepositoryType = {
    type: typeof SET_INIT_REPOSITORY
    initValue: boolean
}
export const setInitRepository = (initValue: boolean): setInitRepositoryType => {
    return ({type: SET_INIT_REPOSITORY, initValue})
}


type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionType>
export const getUsersProfileThink = (user: string): ThunkActionType => async (dispatch) => {
    try {
        const data = await usersAPI.getUsersProfile(user)
        dispatch(addUserProfile(data))
    } catch (e) {
        dispatch(addUserProfile(null))
        /*console.log("error in uploadPhotoThink" + e.message)*/
    }
}
export const getUsersReposThink = (user: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setInitRepository(true))
        const data = await usersAPI.getUsersRepos(user)
        dispatch(addUserRepositories(data))
        dispatch(setInitRepository(false))
    } catch (e) {
        console.log("error in uploadPhotoThink" + e.message)
        dispatch(addUserRepositories(null))
        dispatch(setInitRepository(false))
    }
}

export default profileReducer;