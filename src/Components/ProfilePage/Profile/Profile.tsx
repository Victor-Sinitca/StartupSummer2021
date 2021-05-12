import React, {FC} from "react";
import s from "./Profile.module.css"
import Follower from "./Follower/Follower";
import user from "../../../assets/image/png-icon-user.png"
import users from "../../../assets/image/png-icons-user-group.png"
import {UsersType} from "../../../api/api";

type PropsType = {
    userProfile:UsersType
}
const Profile: FC<PropsType> = ({userProfile}) => {
    return <div className={s.displayProfile}>
        <div className={s.avatar}>
            <img alt="avatar" src={userProfile.avatar_url}/>
        </div>
        <div>{userProfile.name}</div>
        <a className={s.userLogin} href={userProfile.html_url} target="_blank">{userProfile.login}</a>
        <div className={s.displayFollow} >
            <Follower nameField="Followers" quantity={userProfile.followers} icon={users} />
            <Follower nameField="Following" quantity={userProfile.following} icon={user}/>
        </div>

    </div>
}
export default Profile