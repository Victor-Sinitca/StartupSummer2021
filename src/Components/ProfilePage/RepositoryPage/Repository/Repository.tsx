import React, {FC} from "react";
import s from "./Repository.module.css"

type PropsType = {}
const Repository: FC<PropsType> = (props) => {
    return <div className={s.displayRepositoryPage}>
        Repository
    </div>
}
export default Repository