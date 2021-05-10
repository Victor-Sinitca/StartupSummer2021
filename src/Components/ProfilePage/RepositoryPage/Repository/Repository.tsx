import React, {FC} from "react";
import s from "./Repository.module.css"

type PropsType = {
    hrefName:string
    name:string
    description?:string|null
}
const Repository: FC<PropsType> = ({hrefName,name,description}) => {
    return <div className={s.displayRepositoryPage}>
       <a href={hrefName}>{name}</a>
        <div>{description}</div>
    </div>
}
export default Repository