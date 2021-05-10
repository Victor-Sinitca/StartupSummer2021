import React, {FC} from "react";
import s from "./RepositoryPage.module.css"
import Repository from "./Repository/Repository";
import {UserReposType, UsersType} from "../../../api/api";
import PaginatorV1 from "../../commen/PaginatorV1/PaginatorV1";


type PropsType = {
    pageNumber:number
    userProfile:UsersType
    userRepositories:UserReposType |null
    onPageNumber:(number:number)=>void
}
const RepositoryPage: FC<PropsType> = ({userRepositories,userProfile,pageNumber,onPageNumber}) => {
    const pageSize = 15 as number
    const sliceArg1=(pageNumber - 1) * pageSize
    const sliceArg2=pageNumber * pageSize
    let totalCount = 0 as number
    let repositoryRead
    let RepositoryPart= userRepositories
    if(userRepositories){
        totalCount = userRepositories.length
        RepositoryPart = userRepositories.slice(sliceArg1, sliceArg2)
        repositoryRead =RepositoryPart.map((r)=>
            <Repository hrefName={r.html_url} name={r.name} description={r.description}/>
        )
    }
    return <div className={s.displayRepositoryPage}>
        <div>Repositories</div>
        {repositoryRead}
        <PaginatorV1 totalCount={totalCount} pageSize={pageSize} pageNumber={pageNumber} onPageNumber={onPageNumber}/>
    </div>
}
export default RepositoryPage