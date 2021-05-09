import React, {FC} from "react";
import s from "./ProfilePage.module.css"
import Profile from "./Profile/Profile";
import RepositoryPage from "./RepositoryPage/RepositoryPage";

type PropsType = {}
const ProfilePage: FC<PropsType> = (props) => {
    return <div className={s.displayProfile}>
        <Profile/>
        <RepositoryPage/>
    </div>
}
export default ProfilePage