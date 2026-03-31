export default function Repo(props){
    let repo = props.repo;
    console.log(repo);
    return(
        <div>
        <p>{repo.name}</p>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
        <p>{repo.stargazers_count}</p>
        <p>Updated 2 days ago</p>
        </div>
    )
}