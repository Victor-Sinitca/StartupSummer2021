import React, {FC} from "react";
import s from "./Profile.module.css"
import avatar from "../../../assets/image/EmptyAvatar.png"
import Follower from "./Follower/Follower";
import user from "../../../assets/image/png-icon-user.png"
import users from "../../../assets/image/png-icons-user-group.png"

type PropsType = {}
const Profile: FC<PropsType> = (props) => {
    return <div className={s.displayProfile}>
        <div className={s.avatar}>
            <img src={avatar}/>
        </div>
        <div>Victor</div>
        <div>Linc</div>
        <div className={s.displayFollow} >
            <Follower nameField="Followers" quantity={100} icon={user} />
            <Follower nameField="Following" quantity={100} icon={users}/>
        </div>

    </div>
}
export default Profile