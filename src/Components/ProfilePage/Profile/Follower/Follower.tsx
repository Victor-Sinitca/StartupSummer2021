import React, {FC} from "react";
import s from "./Follower.module.css"


type PropsType = {
    nameField:string
    quantity:number
    icon:string
}
const Follower: FC<PropsType> = ({nameField,quantity,icon}) => {
    let quantityString="" as string
    if (quantity>999){
        quantityString=Math.round(quantity/100)/10+"k"
    }else quantityString=String(quantity)
    return <div className={s.displayFollower}>
        <div className={s.icon}>
            <img src={icon} alt="avatar"/>
        </div>
        <div className={s.quantity}>{quantityString}</div>
        <div className={s.nameField}>{nameField}</div>
    </div>
}
export default Follower