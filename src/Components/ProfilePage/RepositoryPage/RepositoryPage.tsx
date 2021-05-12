import React, {FC} from "react";
import s from "./RepositoryPage.module.css"
import Repository from "./Repository/Repository";
import {UserReposType, UsersType} from "../../../api/api";
import PaginatorV1 from "../../commen/PaginatorV1/PaginatorV1";


type PropsType = {
    pageNumber: number
    userProfile: UsersType
    userRepositories: UserReposType | null
    perPage: number
    onPageNumber: (number: number) => void
}
const RepositoryPage: FC<PropsType> = ({
                                           userRepositories, userProfile,
                                           pageNumber, onPageNumber, perPage
                                       }) => {
    let repositoryRead
    let totalCount = 0 as number
    if (userRepositories) {
        totalCount = userProfile.public_repos
        repositoryRead = userRepositories.map((r) =>
            <Repository key={r.id} hrefName={r.html_url} name={r.name} description={r.description}/>
        )
    }
    return <div className={s.displayRepositoryPage}>
        <div className={s.RepositoryHeader} >Repositories ({userProfile.public_repos})</div>
        <div className={s.displayRepositoryRead}>
            {repositoryRead}
        </div>
        {totalCount > perPage &&
        <PaginatorV1 totalCount={userProfile.public_repos} pageSize={perPage}
                     pageNumber={pageNumber} onPageNumber={onPageNumber}/>}
    </div>
}
export default RepositoryPage