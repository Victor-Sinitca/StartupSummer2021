import React, {FC} from "react";
import s from "./RepositoryPage.module.css"
import Repository from "./Repository/Repository";
import {useDispatch} from "react-redux";
import {uploadPhotoThink} from "../../../redux/profile-reducer";

type PropsType = {}
const RepositoryPage: FC<PropsType> = (props) => {
    const dispatch = useDispatch()

    const userSearch=()=>{
        dispatch(uploadPhotoThink())
    }

    return <div className={s.displayRepositoryPage}>
        <button onClick={userSearch}>click</button>
        <div>Repositories</div>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
    </div>
}
export default RepositoryPage