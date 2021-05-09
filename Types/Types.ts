












export type postType={
    id:number
    message:string|null
    stateLike: {countLike: number, disLike:boolean, Like:boolean }
}
export type contactsType = {
    readonly facebook: null | string,
    readonly github: null | string,
    readonly instagram: null | string,
    readonly mainLink: null | string,
    readonly twitter: null | string,
    readonly vk: null | string,
    readonly website: null | string,
    readonly youtube: null | string,
}
export type photosType = {
    readonly small:string|null
    readonly large:string|null
}
export type profileUserType = {
    readonly userId:number|null
    readonly lookingForAJob: boolean
    readonly lookingForAJobDescription: string|null
    readonly fullName: string|null
    readonly contacts:contactsType
    readonly photos:photosType|null
    readonly aboutMe: string|null,
}