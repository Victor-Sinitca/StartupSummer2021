import {AppStateType} from "./redux-store";
import {UserReposType, UsersType} from "../api/api";


export const getSearchedUser =(state:AppStateType):string=>{
    return state.profilePage.searchedUser
}
export const getUserProfile =(state:AppStateType):null|UsersType=>{
    return state.profilePage.userProfile
}
export const getUserRepositories =(state:AppStateType):null|UserReposType=>{
    return state.profilePage.userRepositories
}
export const getPageNumber =(state:AppStateType):number=>{
    return state.profilePage.pageNumber
}

