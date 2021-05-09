import axios, {AxiosRequestConfig} from "axios";
import {contactsType, photosType, profileUserType} from "../../Types/Types";

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    withCredentials: true,
    headers: {"Accept": "application/vnd.github.v3+json"}
    //headers: {"API-KEY": "50d6e06b-ef3e-4c7e-9bfc-aa809ba4441b"}
} as AxiosRequestConfig)

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}


type RespUsersType = {
    items: Array<UserType>
    totalCount: number,
    "error": string | null
}


type UserType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    received_events_url: string,
    type: string,
    score: number,
    following_url: string,
    gists_url: string,
    starred_url: string,
    events_url: string,
    site_admin: boolean
}
type RespUsersSearchType = {
    total_count: number,
    incomplete_results: boolean,
    items: Array<UserType>
}

export const searchAPI = {
    users(pageNumber = 1, pageSize = 20, searchText = 'Victor-Sinitca', sortText = "", order = "") {
        return instance.get<RespUsersSearchType>(`/search/users`, {
            params: {
                page:pageNumber,
                per_page:pageSize,
                q:searchText,
                sort:sortText,
                order:order
            }
        })
            .then(response => response.data)
    },
}
/*export const searchAPI = {
    users(pageNumber = 1, pageSize = 20, searchText = '',sortText="",order="") {
        return instance.get<RespUsersSearchType>(`/search/
        users?page=${pageNumber}&per_page=${pageSize}&q=${searchText}&sort=${sortText}&order=${order}`)
            .then(response => response.data)
    },
}*/


export const usersAPI = {
    listUsers(pageNumber = 1, pageSize = 10, searchText = '') {
        return instance.get<RespUsersType>(`users?page=${pageNumber}&count=${pageSize}&term=${searchText}`)
            .then(response => response.data)
    },


    getUsers(pageNumber = 1, pageSize = 10, searchText = '') {
        return instance.get<RespUsersType>(`users?page=${pageNumber}&count=${pageSize}&term=${searchText}`)
            .then(response => response.data)
    },


    getFollow(id: number) {
        return instance.post(`follow/${id}`, {},)
    },
    getUnFollow(id: number) {
        return instance.delete(`follow/${id}`, {},)
    },

}

type getMeType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}
type RespToLogoutType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}
type RespToLoginType = {
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}
export const authAPI = {
    getMe() {
        return instance.get<getMeType>(`auth/me`)
            .then(response => response.data)
    },
    getToLogout() {
        return instance.delete<RespToLogoutType>(`auth/login`)
            .then(response => response.data)
    },
    getToLogin(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<RespToLoginType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
}


export type ProfileUpdateType = {
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
}
type RespUpdateProfileType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}
type RespUpdateStatusType = RespUpdateProfileType
type RespUploadPhotoType = {
    data: {
        photos: photosType
    }
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: ResultCodeEnum
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<profileUserType>(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<any>(`/profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<RespUpdateStatusType>(`/profile/status`, {status: status})
            .then(response => response.data)
    },
    updateProfile(profile: ProfileUpdateType) {
        return instance.put<RespUpdateProfileType>(`profile`, profile)
            .then(response => response.data)
    },
    uploadPhoto(file: any) {
        let data = new FormData();
        data.append("image", file);
        return instance.put<RespUploadPhotoType>(`/profile/photo`, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response.data)
    },
}

type CaptchaUrlType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaUrlType>(`/security/get-captcha-url`)
            .then(response => response.data)
    },
}
