import React, {FC} from "react";
import s from "./Follower.module.css"


type PropsType = {
    nameField:string
    quantity:number
    icon:string
}
const Follower: FC<PropsType> = ({nameField,quantity,icon}) => {
    return <div className={s.displayFollower}>
        <div className={s.icon}>
            <img src={icon} alt="im"/>
        </div>
        <div className={s.quantity}>{quantity}</div>
        <div className={s.nameField}>{nameField}</div>
    </div>
}
export default Follower