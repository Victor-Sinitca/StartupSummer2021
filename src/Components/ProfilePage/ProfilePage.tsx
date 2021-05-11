import React, {FC, useEffect} from "react";
import s from "./ProfilePage.module.css"
import Profile from "./Profile/Profile";
import RepositoryPage from "./RepositoryPage/RepositoryPage";
import {useDispatch, useSelector} from "react-redux";
import {getInitRepository, getPageNumber, getUserProfile, getUserRepositories} from "../../redux/profile-selectors";
import {getUsersReposThink, setPageNumber} from "../../redux/profile-reducer";
import Preloader from "../commen/Preloader/Preloader";

type PropsType = {}
const ProfilePage: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const userProfile = useSelector(getUserProfile)
    const userRepositories = useSelector(getUserRepositories)
    const pageNumber = useSelector(getPageNumber)
    const initRepository = useSelector(getInitRepository)

    const onPageNumber = (number: number) => {
        dispatch(setPageNumber(number))
    }
    useEffect(() => {
        if (userProfile) {
            dispatch(getUsersReposThink(userProfile.login))
        }
    }, [userProfile]);


    return <div className={s.displayProfile}>
        {userProfile ? <>
                <Profile userProfile={userProfile}/>
                {initRepository ?
                    <Preloader/>
                    : userRepositories && userRepositories?.length > 0 ?
                        <RepositoryPage pageNumber={pageNumber} userProfile={userProfile}
                                        userRepositories={userRepositories}
                                        onPageNumber={onPageNumber}/>
                        : <div> No repositories</div>
                }
            </>
            : <div>
                empty user
            </div>
        }

    </div>
}
export default ProfilePage