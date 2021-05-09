import React, {FC} from "react";
import s from "./Header.module.css"
import github from "../../assets/image/ghub_done.png"
import search from "../../assets/image/search-done.png"

type PropsType = {}
const Header: FC<PropsType> = (props) => {
    return <div className={s.displayHeader}>
        <div className={s.githubImg}>
            <img src={github} alt="github_icon"/>
        </div>
        <div className={s.search}>
            <img src={search} alt="search"/>
            <input/>
        </div>


    </div>
}
export default Header