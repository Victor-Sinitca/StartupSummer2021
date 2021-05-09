import React, {ChangeEvent, ChangeEventHandler, FC, useState} from "react";
import s from "./Header.module.css"
import github from "../../assets/image/ghub_done.png"
import search from "../../assets/image/search-done.png"
import {useDispatch} from "react-redux";
import {getUsersProfileThink} from "../../redux/profile-reducer";

type PropsType = {

}
const Header: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const [searchedUserText, setSearchedUserText]=useState("")
    const placeholderUserName="Enter GitHub username" as string




    const handleValidate = (event:ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        setSearchedUserText(target.value)
    }
    const handleSearchUser = () => {
        dispatch(getUsersProfileThink(searchedUserText))
    }

    return <div className={s.displayHeader}>
        <div className={s.githubImg}>
            <img src={github} alt="github_icon"/>
        </div>
        <div className={s.search}>
            <img src={search} alt="search"/>
            <input placeholder={placeholderUserName} value={searchedUserText} onChange={handleValidate} />
        </div>
        <div>
            <button onClick={handleSearchUser}>search</button>
        </div>
    </div>
}
export default Header