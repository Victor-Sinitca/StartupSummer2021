import React, {FC} from "react";
import s from "./RepositoryPage.module.css"
import Repository from "./Repository/Repository";

type PropsType = {}
const RepositoryPage: FC<PropsType> = (props) => {
    return <div className={s.displayRepositoryPage}>
        <div>Repositories</div>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
    </div>
}
export default RepositoryPage