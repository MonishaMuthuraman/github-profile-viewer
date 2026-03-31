import Repo from "./Repo";
export default function RepoList(props){
    // console.log(props.repoList);
    let reposlist = props.repoList;
    return(
        <div>
            <h2>Public Repositories</h2>
            {reposlist.map((repo)=><Repo repo={repo}/>)}
        </div>
    )
}