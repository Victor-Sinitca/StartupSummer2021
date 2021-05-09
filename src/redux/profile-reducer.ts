

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

export default profileReducer ;