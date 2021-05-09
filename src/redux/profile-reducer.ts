import {searchAPI} from "../api/api";


const ADD_POST = 'profilePage/ADD-POST';

let initialState = {

}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType= initialState, action:any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {

            }
        default:
            return state;
    }
}


type addPostType={
    type: typeof ADD_POST
    text:string
}
export const addNewPost = (text:string): addPostType => {
    return ({type: ADD_POST, text})
}
export const uploadPhotoThink = (): any => async (dispatch:any) => {
    try{
        debugger
        const data = await searchAPI.users( 1, 20, '', "", "")

        const user=data

    }catch (e) {
        console.log("error in uploadPhotoThink" + e.message)
    }
}
export default profileReducer ;