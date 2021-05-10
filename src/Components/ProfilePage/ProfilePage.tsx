import React, {FC, useEffect} from "react";
import s from "./ProfilePage.module.css"
import Profile from "./Profile/Profile";
import RepositoryPage from "./RepositoryPage/RepositoryPage";
import {useDispatch, useSelector} from "react-redux";
import {getPageNumber, getUserProfile, getUserRepositories} from "../../redux/profile-selectors";
import {addUserRepositories, getUsersReposThink, setPageNumber} from "../../redux/profile-reducer";

type PropsType = {}
const ProfilePage: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const userProfile=useSelector(getUserProfile)
    const userRepositories=useSelector(getUserRepositories)
    const pageNumber=useSelector(getPageNumber)

    const onPageNumber=(number:number)=>{
        dispatch(setPageNumber(number))
    }
    useEffect(() => {
        if(userProfile){
            dispatch(getUsersReposThink(userProfile.login))
        }
    }, [userProfile]);


    return <div className={s.displayProfile}>
        {userProfile?<>
                <Profile userProfile={userProfile}/>
                <RepositoryPage pageNumber={pageNumber} userProfile={userProfile} userRepositories={userRepositories} onPageNumber={onPageNumber}/>
        </>
            :<div>
                empty user
            </div>


        }

    </div>
}
export default ProfilePage